const parseJson = require('./parse-json');
const validate = require('./validate');
const authenticate = require('./authenticate');

module.exports = {
  'default-get': async (req, routeSpecs, controller) => controller(),
  'default-post': async (req, routeSpecs, controller) => {
    const body = await parseJson(req);
    const { schema } = routeSpecs.requestBody.content['application/json'];
    validate(schema, body);
    return controller(body);
  },
  'authenticated-get': async (req, routeSpecs, controller) => {
    await authenticate(req);
    return controller();
  },
  'authenticated-put': async (req, routeSpecs, controller) => {
    await authenticate(req);
    const body = await parseJson(req);
    const { schema } = routeSpecs.requestBody.content['application/json'];
    validate(schema, body);
    return controller(body);
  },
};
