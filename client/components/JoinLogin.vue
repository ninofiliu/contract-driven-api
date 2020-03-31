<template>
  <form @submit.prevent="submit">
    <div v-if="message">{{ message }}</div>
    <div><input v-model="username" placeholder="username"></div>
    <div><input v-model="password" placeholder="password"></div>
    <div><button type="submit">[login]</button></div>
  </form>
</template>

<script>
// import api from '../api';
// import ValidationError from '../api/ValidationError';

export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
    };
  },
  methods: {
    submit() {
      // TODO
    },
  },
};
</script>
