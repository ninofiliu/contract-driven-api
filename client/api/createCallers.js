import Ajv from 'ajv';
import ValidationError from './ValidationError';
import store from '../store';

const ajv = new Ajv();

export default (origin) => ({
  'get-authenticated': async ({ path, authorizedErrors }) => {
    const { token } = store.state;
    const headers = { 'Authorization': token };
    const resp = await fetch(origin + path, { headers });
    const json = await resp.json();
    if (json.error && !authorizedErrors.includes(json.error)) {
      throw new Error(`Unexpected server error: ${json.error}`);
    }
    return json;
  },
  'post-authenticated': async ({ path, data, schema, authorizedErrors }) => {
    const valid = ajv.validate(schema, data);
    if (!valid) throw new ValidationError(path, data, schema, ajv.errors);
    const { token } = store.state;
    const resp = await fetch(origin + path, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await resp.json();
    if (json.error && !authorizedErrors.includes(json.error)) {
      throw new Error(`Unexpected server error: ${json.error}`);
    }
    return json;
  },
  'post-default': async ({ path, data, schema, authorizedErrors }) => {
    const valid = ajv.validate(schema, data);
    if (!valid) throw new ValidationError(path, data, schema, ajv.errors);
    const resp = await fetch(origin + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await resp.json();
    if (json.error && !authorizedErrors.includes(json.error)) {
      throw new Error(`Unexpected server error: ${json.error}`);
    }
    return json;
  },
});
