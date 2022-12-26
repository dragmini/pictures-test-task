<template>
  <div class="actions">
    <AppLogo style="width: 48px; height: 48px" />
    <ul class="actions__menu">
      <li>Каталог</li>
      <li>Доставка</li>
      <li>Оплата</li>
      <li>Контакты</li>
      <li>О галерее</li>
    </ul>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';

export default {
  components: {
    AppLogo,
  },
};
</script>

<style lang="scss" scoped>
.actions {
  height: 96px;
  display: flex;
  gap: 48px;
  align-items: center;

  &__menu {
    display: flex;
    list-style-type: none;
    gap: 48px;
  }

  &__menu li {
    cursor: pointer;
    color: #343030;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
}
</style>
