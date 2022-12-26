<template>
  <div class="footer">
    <AppNavigation />
    <div class="footer__inf">
      <div class="footer__actions">
        <img src="@/assets/phone.svg" />
        <p>+7 (495) 555-55-55</p>
      </div>
      <div class="footer__actions">
        <img src="@/assets/adress.svg" />
        <p>г. Москва, ул. Расплетина, 24</p>
      </div>
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
.footer {
  width: 1200px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__inf {
    display: flex;
    align-items: center;
    gap: 51px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__actions p {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #555555;
    cursor: pointer;
  }
}
</style>
