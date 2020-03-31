<template>
  <div>
    <JoinSignup/>
    <br>
    <JoinLogin/>
  </div>
</template>

<script>
import JoinSignup from './JoinSignup.vue';
import JoinLogin from './JoinLogin.vue';

export default {
  components: {
    JoinSignup,
    JoinLogin,
  },
};
</script>
