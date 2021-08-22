import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: [],
    id: 0,
  },
  getters: {
    complete: state => {
      const completeTodo = state.todoItems.filter(todo => todo.done);
      return completeTodo.length;
    },
    totalTodos: state => state.todoItems,
    totalCount: state => state.todoItems.length,
  },
  mutations: {
    add(state, payload) {
      state.todoItems.push(payload);
    },
    delete(state, payload) {
      state.todoItems.some((todo, idx) => {
        if (todo.id === payload) {
          state.todoItems.splice(idx, 1);
        }
      })
    }
  }
});