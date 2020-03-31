const Ajv = require('ajv');

const ajv = new Ajv();

module.exports = (schema) => {
  const validate = ajv.compile(schema);
  return (req, res, next) => {
    if (!validate(req.body)) {
      res.status(400);
      res.send(`Data does not pass JSON schema validation, details: ${JSON.stringify(validate.errors, null, 4)}`);
    } else {
      next();
    }
  };
};
