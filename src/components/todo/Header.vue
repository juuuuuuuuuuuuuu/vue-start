<template>
  <header class="header">
    <h1 class="logo"><span class="blind">todo</span></h1>
    <p class="header__date">8/19</p>
  </header>
</template>
<script>
export default {
}
</script>

<style lang="scss">

.header {
  display: flex;
  justify-content: space-between;

  &__date {
    font-size: 1.2rem;
    letter-spacing: 0.02rem;
  }
}

.logo {
  background-image: icon("logo", "ffffff");
  width: 5.8rem;
  height: 1.6rem;
  background-repeat: no-repeat;
}




</style>