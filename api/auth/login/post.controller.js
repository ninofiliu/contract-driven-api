const users = require('../../../server/modules/users');
const { errors } = require('./post.infos');

module.exports = async (user) => {
  if (!users.exists(user)) throw new Error(errors.wrong);
  return { token: 'ssshhh' };
};
