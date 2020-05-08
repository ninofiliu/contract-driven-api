import store from './store';

export default {
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
