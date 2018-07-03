<template lang="pug">
  v-container(
    grid-list-md
    text-xs-center
  )
    v-layout(row wrap)
      v-flex(xs12)
        v-container(fluid)
          ImageCarousel(:images="images")
    v-layout(row wrap)
      v-flex(xs12)
        div(class="page_divider")
</template>

<script>
import ImageCarousel from './ImageCarousel';

export default {
  name: 'PageIndex',

  components: {
    ImageCarousel,
  },

  computed: {
    images() {
      return this.$store.getters.images;
    },
  },
};
</script>

