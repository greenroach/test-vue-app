<template lang="pug">
  v-app
    AppHeader
    router-view
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',

  components: {
    AppHeader,
  },

  data() {
    return {
      title: 'Test App',
    };
  },
};
</script>

<style lang="scss">
  @import './assets/scss/main.scss'
</style>
