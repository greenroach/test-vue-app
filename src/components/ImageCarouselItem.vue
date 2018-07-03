<template lang="pug">
  v-card(
    class="image-carousel__item mx-2"
  )
    v-card-media(
      :src="imagePath"
      :height="imageHeight"
    )
</template>

<script>
export default {
  name: 'ImageCarouselItem',

  props: {
    imagePath: String,
    imageHeight: String,
  },
};
</script>

