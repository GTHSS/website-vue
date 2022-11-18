<script defer setup lang="ts">
// Set some properties we will need later.
defineProps<{
  content: String;
}>();
</script>
<template>
  <div style="flex: content; padding: 4vw">
    <h2>{{ content }}</h2>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

h2 {
  text-align: center;
  text-rendering: optimizeLegibility;
  color: white;
  font-size: 6vw;
  font-family: "Source Sans Pro", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
}
</style>
