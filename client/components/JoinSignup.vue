<template>
  <form @submit.prevent="submit">
    <div v-if="message">{{ message }}</div>
    <div><input v-model="username" placeholder="Username"></div>
    <div><input v-model="password" placeholder="Password"></div>
    <div><button type="submit">[Signup]</button></div>
  </form>
</template>

<script>
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
    async submit() {
      const { error } = await api.post('/auth/signup', {
        body: {
          username: this.username,
          password: this.password,
        },
      });
      if (error) return this.message = error;
      this.message = 'Successful signup';
    },
  },
};
</script>
