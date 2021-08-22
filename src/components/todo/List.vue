<template>
  <ul class="list">
    <li v-for="todo in todoItems" v-bind:key="todo.id" class="list__item">
      <div class="list__left">
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkbox__icon"></span>
          <span class="checkbox__text">{{todo.text}}</span>
        </label>
      </div>
      <div class="list__right">
        <button class="list__delete" v-on:click="deleteItem(todo.id)"></button>
        <span class="list__dueDate">{{todo.dueDate}}</span>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    todoItems() {
      return this.$store.state.todoItems;
    },
  },
  methods: {
    ...mapMutations({
      deleteItem: "delete",
    })
  },
};
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &__item {
    display: flex;
    justify-content: space-between;
    margin-top: 1.2rem;
    background-color: #fff;
    padding: 0;
  }

  &__left {
    @include left-right;
    padding: 0.5rem;
  }

  &__right {
    @include left-right;
    flex-direction: column;
  }

  &__delete {
    background-image: icon('cancel', '');
    background-repeat: no-repeat;
    background-size: 1.62rem 1.62rem;
    background-position: 50% 50%;
    width: 2.5rem;
    height: 2.5rem;
  }

  &__dueDate {
    font-size: 1.1rem;
    color: #939393;
    letter-spacing: 0.02rem;
  }
}

// 체크박스 인풋은 숨김처리
.checkbox input {
  display: none;
}

.checkbox {
  &input {
    display: none;
  }

  &__icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 1px solid black;
    position: relative;
    cursor: pointer;
    vertical-align: top;

    &:before {
      @include before-after;
      top: 9px; // 위치값 top
      left: 2px; // 위치값 left
      transform: rotate(-45deg); // 회전값
    }

    &:after {
       @include before-after;
      top: 16px; // 위치값 top
      left: 9px; // 위치값 left
      transform: rotate(-135deg); // 회전값
    }
  }

  &__text {
    font-size: 1.5rem;
    padding-left: 1rem;
  }
}

// 체크되었을 때 테투리 설정
.checkbox input:checked + .checkbox__icon {
  border-color: red;
}

// 체크되었을 때 가상요소 before
.checkbox input:checked + .checkbox__icon::before {
  height: 10px; // 높이값 지정
  transition: all 0.15s ease; // 0.15초 변화시간 줌
}

// 체크되었을 때 가상요소 after
.checkbox input:checked + .checkbox__icon::after {
  height: 20px; // 높이값 지정
  transition: all 0.15s ease 0.15s; // 0.15초 변화시간 + 딜레이 시간 줌
}
</style>
