/* eslint-disable global-require */
module.exports = [
  {
    method: 'post',
    path: '/auth/signup',
    controller: require('../api/auth/signup/post.controller'),
    infos: require('../api/auth/signup/post.infos.json'),
    schema: require('../api/auth/signup/post.schema.json'),
  },
  {
    method: 'post',
    path: '/auth/login',
    controller: require('../api/auth/login/post.controller'),
    infos: require('../api/auth/login/post.infos.json'),
    schema: require('../api/auth/login/post.schema.json'),
  },
];
