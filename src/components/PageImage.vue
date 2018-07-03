<template lang="pug">
  v-container(
    grid-list-md
    text-xs-center
   )
    v-layout(row wrap)
      v-flex(xs12)
        v-btn(to="/") Back
</template>

<script>
import ImageCarousel from './ImageCarousel';

export default {
  name: 'PageImage',

  components: {
    ImageCarousel,
  },

  data() {
    return {
    };
  },
};
</script>

