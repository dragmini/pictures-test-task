<template>
  <div id="app">
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="app-wrapper">
      <p class="title">Картины эпохи Возрождения</p>
      <PictureList style="align-self: center" />
    </div>
    <div class="app-footer">
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import PictureList from '@/components/PictureList.vue';

export default {
  components: {
    AppHeader,
    PictureList,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
@import './assets/styles.scss';

:root {
  padding: 0px;
  margin: 0px;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-header {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e1e1e1;
}

.app-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #eceaea;
  position: absolute;
  bottom: 0px;
}

.app-wrapper {
  width: 1200px;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #343030;
  margin-top: 45px;
}
</style>