<template>
  <div>
    <button @click="push" :disabled="saved">[save]</button>
    <div
      v-for="task of tasks"
      :key="task.key"
      @click="() => task.done = !task.done"
      class="task"
      :class="{ done: task.done }"
    >{{ task.name }}</div>
    <form @submit.prevent="addTask">
      <input v-model="newTaskName" placeholder="New task name">
      <button type="submit">[add]</button>
    </form>
  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      tasks: [],
      newTaskName: '',
      saved: true,
    };
  },
  async created() {
    await this.pull();
  },
  methods: {
    async pull() {
      const { tasks } = await api('/tasks/get-all');
      this.tasks = tasks.map((task, i) => ({ ...task, key: i }));
      this.saved = true;
    },
    async push() {
      const tasks = this.tasks.map((task) => ({ done: task.done, name: task.name }));
      await api('/tasks/set-all', { tasks });
      this.saved = true;
    },
    addTask() {
      const key = this.tasks.length
        ? this.tasks[this.tasks.length - 1].key + 1
        : 0;
      this.tasks.push({ key, done: false, name: this.newTaskName });
      this.newTaskName = '';
      this.saved = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  &:hover {
    cursor: pointer;
    opacity: .5;
  }
  &.done {
    text-decoration: line-through;
  }
}
</style>
