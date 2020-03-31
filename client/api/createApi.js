import routes from './routes';
import createCallers from './createCallers';

export default (origin) => {
  const callers = createCallers(origin);
  return async (path, data = {}) => {
    const { infos: { type, errors }, schema } = routes[path];
    const authorizedErrors = Object.values(errors);
    const caller = callers[type];
    return caller({ path, data, schema, authorizedErrors });
  };
};
