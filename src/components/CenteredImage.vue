<script defer setup lang="ts">
// Set some properties we will need later.
const props = defineProps<{
  imageTitle: string;
  imageAlt: string;
  imageSrc: string;
  sizeX: string;
  sizeY: string;
}>();
</script>
<template>
  <div class="top">
    <h1>
      <img
        style="border-radius: 25px"
        :alt="imageAlt"
        :src="imageSrc"
        :width="sizeX"
        :height="sizeY"
      />
    </h1>
    <div style="margin: 34px 0px 0px 5px">
      <h1>{{ imageTitle }}</h1>
      <h2></h2>
    </div>
  </div>
</template>
<style scoped>
.top {
  display: flex;
  justify-content: center;
  margin: 5px 0px 0px 0px;
}
</style>
