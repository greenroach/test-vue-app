const state = {
  images: [
    { path: '/static/image1.jpg', link: '/image' },
    { path: '/static/image2.jpg', link: '/image' },
    { path: '/static/image3.jpg', link: '/image' },
    { path: '/static/image4.jpg', link: '/image' },
    { path: '/static/image5.jpg', link: '/image' },
    { path: '/static/image6.jpg', link: '/image' },
    { path: '/static/image7.jpg', link: '/image' },
    { path: '/static/image8.jpg', link: '/image' },
    { path: '/static/image9.jpg', link: '/image' },
    { path: '/static/image10.jpg', link: '/image' },
    { path: '/static/image11.jpg', link: '/image' },
  ],
};

const getters = {
  images: s => s.images,
};

const actions = {
};

const mutations = {
  setImages(newState, payload) {
    newState.images = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

