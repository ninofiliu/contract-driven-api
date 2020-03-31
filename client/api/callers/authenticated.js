export default {
  createGet: (origin, path) => async () => {
    const headers = { Authorization: 'ssshhh' };
    const resp = await fetch(origin + path, { headers });
    const json = await resp.json();
    return json;
  },
};
