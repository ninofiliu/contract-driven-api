import { createClient } from 'oa-client';
import specs from '../contract/specs.json';
import store from './store';

const callers = {
  'default-post': async (url, body) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const resp = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
  },
  'authenticated-get': async (url) => {
    const headers = new Headers();
    headers.append('Authorization', store.state.token);
    const resp = await fetch(url, { headers });
    const data = await resp.json();
    return data;
  },
  'authenticated-put': async (url, body) => {
    const headers = new Headers();
    headers.append('Authorization', store.state.token);
    const resp = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
  },
};

const api = createClient(specs, callers, {
  origin: 'http://localhost:8080',
  validationLevel: 'error',
});

export default api;
