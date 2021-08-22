<template>
  <div class="input_form">
    <input 
      class="input_form__input"
      placeholder="입력하세요" 
      v-model="inputValue"
      v-on:keypress.enter="addTodo"
    />
    <button class="input_form__button" v-on:click="addTodo"></button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { format } from 'date-fns'

export default {
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    ...mapGetters(["totalTodos", "totalCount"])
  },
  methods: {
    addTodo() {
      if (this.inputValue === "") {
        alert("입력해주세요");
        return;
      }

      if (this.isDuplicate(this.inputValue)) {
        alert("중복된 내용입니다.");
        this.clearInput();
        return;
      }

      this.$store.commit("add", {
        id: this.$store.state.id++,
        text: this.inputValue,
        done: false,
        dueDate: format(new Date(), 'yyyy-MM-dd'),
      });

      this.clearInput();
    },
    isDuplicate(inputValue) {
      return this.totalTodos.some(todo => todo.text === inputValue);
    },
    clearInput() {
      this.inputValue = "";
    },
  }
};
</script>

<style lang="scss">
.input_form {
  display: flex;
  margin-top: 10px;

  &__input {
    width: 100%;
    height: 5.2rem;
    border-radius: 30px;
    background-color: hsla(0, 0%, 100%, 0.48);
    border: 0;
    outline: 0;
    padding: 0 5.2rem 0 2.5rem;
  }

  &__button {
    width: 2.3rem;
    height: 2.3rem;
    background-image: icon("arrow", "333333");
    background-color: #fafafa;
    border-radius: 30px;
    background-repeat: no-repeat;
    background-size: 1.62rem 1.62rem;
    background-position: 50% 50%;
    padding: 2rem;
    margin: 0.6rem -5rem;
  }
}
</style>
