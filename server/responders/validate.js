const Ajv = require('ajv');

const ajv = new Ajv();

module.exports = (schema, body) => {
  const valid = ajv.validate(schema, body);
  if (!valid) throw new Error(`Does not pass validation: ${JSON.stringify(ajv.errors, null, 4)}`);
};
