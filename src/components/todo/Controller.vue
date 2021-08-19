<template>
  <div class="controller">
    <select class="controller__select">
      <option>오래된순</option>
      <option>최신순</option>
    </select>
    <a class="controller__remove">
      <span>모두 삭제</span>
    </a>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
.controller {
  display: flex;
  justify-content: space-between;

  &__select {
    font-size: 1.4rem;
    padding: 0.3rem;
    -webkit-appearance: none;
    background-image: icon("tri", "717171");
    background-repeat: no-repeat;
    background-position: 5.4rem 50%;
    background-size: 1.15rem 1.15rem;
    width: 7rem;
    padding: 0.5rem;
  }

  &__remove {
    color: #ababab;
    font-size: 1.4rem;
    text-decoration: none;
  }
}
</style>