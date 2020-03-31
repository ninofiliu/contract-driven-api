/* eslint-disable global-require */
module.exports = [
  {
    path: '/tasks/get-all',
    infos: require('../api/tasks/get-all/infos.json'),
    controller: require('../api/tasks/get-all/controller'),
  },
  {
    path: '/tasks/set-all',
    infos: require('../api/tasks/set-all/infos.json'),
    controller: require('../api/tasks/set-all/controller'),
    schema: require('../api/tasks/set-all/schema.json'),
  },
  {
    path: '/auth/login',
    infos: require('../api/auth/login/infos.json'),
    controller: require('../api/auth/login/controller'),
    schema: require('../api/auth/login/schema.json'),
  },
  {
    path: '/auth/signup',
    infos: require('../api/auth/signup/infos.json'),
    controller: require('../api/auth/signup/controller'),
    schema: require('../api/auth/signup/schema.json'),
  },
];
