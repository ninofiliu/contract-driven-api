import routes from './routes';
import callers from './callers';

export default (origin) => ({
  post: async (path, data) => {
    const { infos: { type }, schema } = routes[`POST ${path}`];
    const request = callers[type].post(origin, path, schema);
    return request(data);
  },
});
