<template>
  <b-carousel-slide
    :img-src="banner.imageBanner"
    img-width="1024"
    img-height="480"
    >
  </b-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselBanner',
  props: ['banner']
}
</script>

<style>

</style>
