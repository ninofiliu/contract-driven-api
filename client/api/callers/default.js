import Ajv from 'ajv';
import ValidationError from './ValidationError';

const ajv = new Ajv();

export default {
  createGet: (origin, path) => async () => {
    const resp = await fetch(origin + path);
    const json = await resp.json();
    return json;
  },
  createPost: (origin, path, schema) => {
    const validate = ajv.compile(schema);
    return async (data) => {
      if (!validate(data)) {
        throw new ValidationError(path, data, schema, validate.errors);
      }
      const resp = await fetch(origin + path);
      const json = await resp.json();
      return json;
    };
  },
};
