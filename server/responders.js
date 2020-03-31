const validate = require('./middlewares/createValidate');
const wrap = require('./middlewares/wrap');
const authenticate = require('./middlewares/authenticate');

module.exports = {
  'post-authenticated': (router, { path, infos, controller, schema }) => {
    router.post(
      path,
      authenticate,
      validate(schema),
      wrap(controller, infos.errors),
    );
  },
  'post-default': (router, { path, infos, controller, schema }) => {
    router.post(
      path,
      validate(schema),
      wrap(controller, infos.errors),
    );
  },
  'get-authenticated': (router, { path, infos, controller }) => {
    router.get(
      path,
      authenticate,
      wrap(controller, infos.errors),
    );
  },
};
