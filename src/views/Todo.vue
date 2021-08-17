<template>
  <div class="root">
    <!-- 상단 -->
    <section class="top">
      <Header />
      <MainBoard />
      <Input />
    </section>

    <!-- 하단 -->
    <section class="content">
      <Controller />
      <List />
    </section>
  </div>
</template>
<script>
import Header from "../components/todo/Header.vue";
import MainBoard from "../components/todo/MainBoard.vue";
import Input from "../components/todo/Input.vue";
import Controller from "../components/todo/Controller.vue";
import List from "../components/todo/List.vue";

export default {
  components: {
    Header,
    MainBoard,
    Input,
    Controller,
    List
  }
};
</script>
