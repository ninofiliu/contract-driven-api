/* eslint-disable camelcase */
import auth_login_infos from '../../api/auth/login/infos.json';
import auth_login_schema from '../../api/auth/login/schema.json';
import auth_signup_infos from '../../api/auth/signup/infos.json';
import auth_signup_schema from '../../api/auth/signup/schema.json';
import tasks_getAll_infos from '../../api/tasks/get-all/infos.json';

export default {
  '/tasks/get-all': {
    infos: tasks_getAll_infos,
  },
  '/auth/login': {
    infos: auth_login_infos,
    schema: auth_login_schema,
  },
  '/auth/signup': {
    infos: auth_signup_infos,
    schema: auth_signup_schema,
  },
};
