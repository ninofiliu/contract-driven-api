const { Router } = require('express');
const validate = require('./validate.mwf');
const wrapper = require('./wrapper.mwf');
const routes = require('./routes');

const router = new Router();

routes.forEach(({ method, path, controller, infos, schema }) => {
  router[method](
    path,
    validate(schema),
    wrapper(controller, infos.errors),
  );
});

module.exports = router;
