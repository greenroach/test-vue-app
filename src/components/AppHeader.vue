<template lang="pug">
  div(class="app-header")
    div(class="app-header__title")
      h1 Header
    AppHeaderBar(:scrollY="scrollY")
      v-btn(flat to='/') Home
      v-btn(flat to='/about') About US
      v-btn(flat to='/contact') Contact US
</template>

<script>
import AppHeaderBar from './AppHeaderBar';

export default {
  name: 'AppHeader',

  data() {
    return {
      title: 'Test App',
      scrollY: 0,
      offsetTop: 0,
    };
  },

  components: {
    AppHeaderBar,
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollY = Math.round(window.scrollY);
    });
  },
};
</script>

