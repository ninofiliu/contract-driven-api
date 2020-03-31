<template>
  <div>
    <div v-if="token">(not implemented yet)</div>
    <Join v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Join from './components/Join.vue';

export default {
  components: {
    Join,
  },
  computed: {
    ...mapState(['token']),
  },
};
</script>
