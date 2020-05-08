module.exports = async (req) => {
  let text = '';
  await new Promise((resolve) => {
    req.on('data', (chunk) => text += chunk);
    req.on('end', resolve);
  });
  const json = JSON.parse(text);
  return json;
};
