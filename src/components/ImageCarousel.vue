<template lang="pug">
  Carousel(
    :scrollPerPage="true"
    :perPageCustom="perPageCustom"
    :perPage="perPage"
  )
    Slide(
      v-for="(image, index) in images"
      :key="index"
      :minSwipeDistance="minSwipeDistance"
      class="image-carousel__slide"
      @slideClick="onTap(index)"
    )
      ImageCarouselItem(
        :imagePath="image.path"
        :imageHeight="imageHeight"
        class="mb-1"
      )
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import ImageCarouselItem from './ImageCarouselItem';

export default {
  name: 'ImageCarousel',

  components: {
    Carousel,
    Slide,
    ImageCarouselItem,
  },

  props: {
    images: Array,
  },

  computed: {
    perPageCustom() {
      return this.$store.getters.perPageCustom.slice(0);
    },

    perPage() {
      return this.$store.getters.perPage;
    },

    imageHeight() {
      return this.$store.getters.imageHeight;
    },

    minSwipeDistance() {
      return this.$store.getters.minSwipeDistance;
    },
  },

  methods: {
    onTap(index) {
      this.$router.push(this.images[index].link);
    },
  },
};
</script>

