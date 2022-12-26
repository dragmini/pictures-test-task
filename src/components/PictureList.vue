<template>
  <div class="list">
    <PictureCard
      v-for="picture in pictures"
      :key="picture.id"
      v-bind="picture"
    />
  </div>
</template>

<script>
import PictureCard from '@/components/PictureCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    PictureCard,
  },
  computed: {
    ...mapState(['pictures']),
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 15px;
}
</style>