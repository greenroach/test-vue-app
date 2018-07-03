const state = {
  perPage: 1,
  perPageCustom: [[600, 3]],
  imageHeight: '300px',
  minSwipeDistance: 15,
};

const getters = {
  perPageCustom: s => s.perPageCustom,
  perPage: s => s.perPage,
  imageHeight: s => s.imageHeight,
  minSwipeDistance: s => s.minSwipeDistance,
};

const actions = {
};

const mutations = {
  setPerPageCustom(newState, payload) {
    newState.perPageCustom = payload;
  },

  setPerPage(newState, payload) {
    newState.perPageCustom = payload;
  },

  setImageHeight(newState, payload) {
    newState.imageHeight = payload;
  },

  setMinSwipeDistance(newState, payload) {
    newState.minSwipeDistance = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

