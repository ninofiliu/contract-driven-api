import routes from './routes';
import callers from './callers';

export default (origin) => ({
  post: async (path, data) => {
    const { infos: { type }, schema } = routes[`POST ${path}`];
    const call = callers[type].createPost(origin, path, schema);
    return call(data);
  },
});
