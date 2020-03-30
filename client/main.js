import Vue from 'vue';
import createApi from './api/create';
import App from './App.vue';

Vue.config.productionTip = false;
(new Vue({
  render: (h) => h(App),
})).$mount('#root');

const api = createApi('http://my.origin.com');

(async () => {
  const result = await api.post('/auth/signup', {
    username: 'john',
    password: 'pwd123',
  });
  console.log({ result });
})();
