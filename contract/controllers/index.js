/* eslint-disable global-require */
module.exports = {
  '/auth/login': {
    post: require('./auth/login/post'),
  },
  '/auth/signup': {
    post: require('./auth/signup/post'),
  },
  '/tasks': {
    get: require('./tasks/get'),
    put: require('./tasks/put'),
  },
};
