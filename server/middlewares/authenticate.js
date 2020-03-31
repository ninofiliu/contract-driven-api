const auth = require('../modules/auth');

/** @type {import('express').RequestHandler} */
module.exports = async (req, res, next) => {
  const token = req.get('Authorization');
  if (!token) return res.status(401).send('Authorization header must contain token');
  if (!await auth.tokenIsValid(token)) return res.status(403).send('Invalid token');
  next();
};
