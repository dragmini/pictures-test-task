<template>
  <div class="card" :style="cssVariables">
    <img :src="this.sourceImage" class="card__avatar" />
    <div class="card__inf">
      <p class="card__title">{{ content }}</p>
      <p class="card__availability" v-if="!is_Availability">
        Продана на аукционе
      </p>
      <div class="card__actions" v-else>
        <div class="card__prices">
          <p class="card__last-price">{{ last_price }} $</p>
          <p class="card__price">{{ price }} $</p>
        </div>
        <button class="card__btn" @click="clickHandler">
          <img src="@/assets/arrow.svg" v-if="this.is_Selected" />
          {{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    avatar: { type: String, default: null },
    content: { type: String, required: true },
    price: { type: String, required: true },
    last_price: { type: String, default: null },
    is_Selected: { type: String, required: true },
    is_Availability: { type: String, required: true },
  },
  computed: {
    btnText() {
      return this.is_Selected ? 'В корзине' : 'Купить';
    },
    sourceImage() {
      return this.avatar === null ? '' : require(`@/assets/${this.avatar}`);
    },
    cssVariables() {
      return {
        '--bg': this.is_Selected ? '#5B3A32' : '#382e2b',
        '--opacity': this.is_Availability ? 1 : 0.4,
      };
    },
  },
  methods: {
    clickHandler() {
      this.$store.commit('changeSelected', { id: this.id });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0px;
  padding: 0px;
}

.card {
  background: transparent;
  border: 1px solid #e1e1e1;
  width: 280px;
  height: 328px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  // box-sizing: border-box;
  opacity: var(--opacity);

  &__inf {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 168px;
    width: 280px;
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    box-sizing: border-box;
  }

  &__avatar {
    width: 280px;
    height: 160px;
  }

  &__title {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #343030;
    width: 220px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    height: 48px;
  }

  &__last-price {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    text-decoration-line: line-through;
  }

  &__price {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #343030;
  }

  &__btn {
    background: var(--bg);
    width: 118px;
    height: 48px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: #f4f6f9;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 7px;
    justify-content: center;
    align-items: center;
  }

  &__availability {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #343030;
    margin-bottom: 12px;
  }
}
</style>
