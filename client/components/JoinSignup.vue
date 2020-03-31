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
import ValidationError from '../api/ValidationError';

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
      try {
        const { error } = await api.post('/auth/signup', { username: this.username, password: this.password });
        if (error) return this.message = error;
        this.message = 'Successful signup';
      } catch (e) {
        if (e instanceof ValidationError) return this.message = 'Password must be > 4 char';
        throw e;
      }
    },
  },
};
</script>
