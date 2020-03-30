/* eslint-disable camelcase */
import auth_signup_post_infos from '../../api/auth/signup/post.infos.json';
import auth_signup_post_schema from '../../api/auth/signup/post.schema.json';

export default {
  'POST /auth/signup': {
    infos: auth_signup_post_infos,
    schema: auth_signup_post_schema,
  },
};
