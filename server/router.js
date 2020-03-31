const { Router } = require('express');
const validate = require('./middlewares/createValidate');
const wrap = require('./middlewares/wrap');
const routes = require('./routes');
const authenticate = require('./middlewares/authenticate');

const router = new Router();

routes.forEach(({ method, path, controller, infos, schema }) => {
  switch (infos.type) {
    case 'authenticated':
      switch (method) {
        case 'get':
          router.get(
            path,
            authenticate,
            wrap(controller, infos.errors),
          );
          break;
        default:
          throw new Error(`No responder for type ${infos.type} and method ${method}`);
      }
      break;
    case 'default':
      switch (method) {
        case 'post':
          router.post(
            path,
            validate(schema),
            wrap(controller, infos.errors),
          );
          break;
        default:
          throw new Error(`No responder for type ${infos.type} and method ${method}`);
      }
  }
});

module.exports = router;
