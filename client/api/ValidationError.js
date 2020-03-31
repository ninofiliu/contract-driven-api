export default class ValidationError extends Error {
  constructor(path, data, schema, errors) {
    super([
      'Data doesn\'t pass schema validation',
      `Path: ${path}`,
      `Data: ${JSON.stringify(data, null, 2)}`,
      `Schema: ${JSON.stringify(schema, null, 2)}`,
      `Errors: ${JSON.stringify(errors, null, 2)}`,
    ].join('\n'));
  }
}
