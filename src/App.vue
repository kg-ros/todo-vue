<template>
  <h1>Список дел</h1>
      <label for="input">
          Новая задача
      </label>
      <input
        v-model="state.newTask"
        type="text"
      />
      <button @click="addTask">
          Добавить
      </button>
    <ul
      v-for="task in state.tasks"
      :key="task.id"
    >
      <li>
        <span>
          {{ task.name }}
        </span>
        <button @click="removeTask(task.id)">
          Удалить
        </button>
      </li>
    </ul>
</template>

<script setup name="todo-list">
import { reactive } from 'vue';
import { generateId } from './utils';

const state = reactive({
  newTask: '',
  tasks: [
    {
      id: 0,
      name: "Изучить что такое фреймворки"
    }
  ]
});

const addTask = () => {
  state.tasks = [...state.tasks, createTask(state.newTask)];
  state.newTask = "";
}

const createTask = (name) => {
  return {
    name,
    id: generateId(state)
  };
}

const removeTask = (id) => {
  state.tasks = state.tasks.filter((t) => t.id !== id);
}
</script>
