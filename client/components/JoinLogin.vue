<template>
  <form @submit.prevent="submit">
    <div v-if="message">{{ message }}</div>
    <div><input v-model="username" placeholder="Username"></div>
    <div><input v-model="password" placeholder="Password"></div>
    <div><button type="submit">[Login]</button></div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '../api';

export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
    };
  },
  methods: {
    ...mapMutations(['setToken']),
    async submit() {
      const { error, token } = await api.post('/auth/login', {
        body: {
          username: this.username,
          password: this.password,
        },
      });
      if (error) return this.message = error;
      this.setToken(token);
    },
  },
};
</script>
