export default (origin) => ({
  'get-authenticated': async ({ path, authorizedErrors }) => {
    const headers = { 'Authentication': 'ssshhh' };
    const resp = await fetch(origin + path, { headers });
    const { error } = await resp.json();
    if (!authorizedErrors.includes(error)) {
      throw new Error(`Unexpected server error: ${error}`);
    }
  },
});
