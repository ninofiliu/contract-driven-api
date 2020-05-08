import { createClient } from 'oa-client';
import specs from '../contract/specs.json';
import callers from './callers';

const api = createClient(specs, callers, {
  origin: 'http://localhost:8080',
  validationLevel: 'error',
});

export default api;
