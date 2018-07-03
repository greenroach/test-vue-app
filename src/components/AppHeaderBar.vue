<template lang="pug">
  v-toolbar(
    :fixed="isSticky"
    class="app-header__bar"
  )
    v-toolbar-items
      slot
</template>

<script>
export default {
  name: 'AppHeader',

  props: {
    scrollY: Number,
  },

  data() {
    return {
      originalTop: 0,
    };
  },

  computed: {
    isSticky() {
      const newTop = this.scrollY - this.originalTop;
      return (newTop > 0);
    },
  },

  mounted() {
    this.originalTop = this.$el.getBoundingClientRect().top;
  },
};
</script>

