/* eslint-disable camelcase */
import auth_login_post_infos from '../../api/auth/login/post.infos.json';
import auth_login_post_schema from '../../api/auth/login/post.schema.json';
import auth_signup_post_infos from '../../api/auth/signup/post.infos.json';
import auth_signup_post_schema from '../../api/auth/signup/post.schema.json';
import tasks_getAll_get_infos from '../../api/tasks/get-all/get.infos.json';

export default {
  'GET /tasks/get-all': {
    infos: tasks_getAll_get_infos,
  },
  'POST /auth/login': {
    infos: auth_login_post_infos,
    schema: auth_login_post_schema,
  },
  'POST /auth/signup': {
    infos: auth_signup_post_infos,
    schema: auth_signup_post_schema,
  },
};
