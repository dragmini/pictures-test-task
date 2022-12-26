import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const testPictures = [
  {
    id: 1,
    avatar: '1.png',
    content: '«Рождение Венеры» Сандро Боттичелли',
    price: '1 000 000',
    last_price: '2 000 000',
    is_Selected: false,
    is_Availability: true,
  },
  {
    id: 2,
    avatar: '1.png',
    content: '«Рождение Венеры» Сандро Боттичелли',
    price: '1 000 000',
    last_price: '2 000 000',
    is_Selected: false,
    is_Availability: true,
  },
  {
    id: 3,
    avatar: '1.png',
    content: '«Рождение Венеры» Сандро Боттичелли',
    price: '1 000 000',
    last_price: '2 000 000',
    is_Selected: true,
    is_Availability: true,
  },
  {
    id: 4,
    avatar: '1.png',
    content: '«Рождение Венеры» Сандро Боттичелли',
    price: '1 000 000',
    last_price: '2 000 000',
    is_Selected: false,
    is_Availability: false,
  }
]

export default new Vuex.Store({
  state: () => ({
    pictures: testPictures,
  }),
  mutations: {
    changeSelected(state, { id }) {
      const findPicture = state.pictures.find(picture => picture.id === id)
      findPicture.is_Selected = !findPicture.is_Selected
    }
  }
})