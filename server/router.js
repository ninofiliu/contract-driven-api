const { Router } = require('express');
const routes = require('./routes');
const responders = require('./responders');

const router = new Router();

routes.forEach((route) => {
  const responder = responders[route.infos.type];
  responder(router, route);
});

module.exports = router;
