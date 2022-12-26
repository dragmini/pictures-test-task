<template>
  <div class="header">
    <AppNavigation />
    <div class="header__search">
      <input class="header__input" placeholder="Поиск по названию картины" />
      <button class="header__btn">Найти</button>
    </div>
  </div>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';

export default {
  components: {
    AppNavigation,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 1200px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__menu {
    display: flex;
    list-style-type: none;
    gap: 48px;
  }

  &__menu li {
    cursor: pointer;
  }

  &__search {
    display: flex;
    width: 416px;
  }

  &__input {
    width: 294px;
    height: 48px;
    border: 1px solid rgba(225, 225, 225, 1);
    border-radius: 0px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    padding-left: 16px;
    box-sizing: border-box;
  }

  &__input::placeholder {
    color: #9f9f9f;
  }

  &__btn {
    background: #403432;
    border-radius: 0px;
    width: 122px;
    height: 48px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    border: none;
  }
}
</style>
