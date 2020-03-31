<template>
  <div>
    <Tasks v-if="token"/>
    <Join v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Join from './components/Join.vue';
import Tasks from './components/Tasks.vue';

export default {
  components: {
    Join,
    Tasks,
  },
  computed: {
    ...mapState(['token']),
  },
};
</script>
