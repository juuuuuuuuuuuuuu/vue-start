<template>
  <div class="main_bord">
    <span class="main_bord__title">진행률</span>
    <span class="todo_count">
      <em class="todo_count__count">1</em>
      <em class="todo_count__total">/ 2</em>
    </span>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
.main_bord {
  display: flex;
  flex-direction: column;
  color: #fff;

  &__title {
    font-size: 2.5rem;
    font-weight: 600;
  }
}

.todo_count {
  &__count {
    font-size: 3.5rem;
    margin: 0 10px;
    font-weight: 700;
  }

  &__total {
    font-size: 2rem;
  }
}
</style>