const users = require('../../../server/users.module');
const { errors } = require('./post.infos');

module.exports = async (user) => {
  if (!users.exists(user)) throw new Error(errors.wrong);
  return { token: 'ssshhh' };
};
