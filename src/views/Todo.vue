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

<style lang="scss">
@import "../assets/style/_reset";

.top {
  background-image: linear-gradient(145deg, skyblue 20%, salmon 85%);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: $padding;
}

.content {
  display: flex;
  flex-direction: column;
  padding: $padding;
}

</style>
