<template>
  <div>
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
// import api from '../api';

export default {
  data() {
    return {
      tasks: [
        { key: 0, done: false, name: 'Foo' },
        { key: 0, done: true, name: 'Bar' },
      ],
      newTaskName: '',
    };
  },
  // async created() {
  //   await this.pull();
  // },
  methods: {
    // async pull() {
    //   const { tasks } = await api('/tasks/get-all');
    //   this.tasks = tasks.map((task, i) => ({ ...task, key: i }));
    // },
    addTask() {
      const key = this.tasks.length
        ? this.tasks[this.tasks.length - 1].key + 1
        : 0;
      this.tasks.push({ key, done: false, name: this.newTaskName });
      this.newTaskName = '';
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
