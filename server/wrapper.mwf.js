module.exports = (controller, authorizedErrors) => async (req, res) => {
  try {
    const result = await controller(req.body);
    res.json(result);
  } catch (e) {
    if (Object.values(authorizedErrors).includes(e.message)) {
      res.json({ error: e.message });
    } else {
      res.json({ error: 'Internal server error' });
    }
  }
};
