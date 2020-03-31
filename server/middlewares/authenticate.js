/** @type {import('express').RequestHandler} */
module.exports = (req, res, next) => {
  const token = req.get('Authorization');
  if (!token) return res.status(401).send('Authorization header must contain token');
  if (token !== 'ssshhh') return res.status(403).send('Invalid token');
  next();
};
