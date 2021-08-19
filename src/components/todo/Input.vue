<template>
  <div class="input_form">
    <input class="input_form__input" placeholder="입력하세요"/>
    <button class="input_form__button"></button>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss">
.input_form {
  display: flex;
  margin-top: 10px;

  &__input {
    width: 100%;
    height: 5.2rem;
    border-radius: 30px;
    background-color: hsla(0,0%,100%,.48);
    border: 0;
    outline: 0;
    padding: 0 5.2rem 0 2.5rem;
  }

  &__button {
    width: 2.3rem;
    height: 2.3rem;
    background-image: icon('arrow', '333333');
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