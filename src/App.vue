<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import MenuItem from "./components/MenuItem.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />


  </main>
  <MenuItem
    imageLink="https://source.sussy.tech/sussy-incorporated/website/raw/branch/master/images/nextcloud_logo.webp"
    imageAlternativeName="nextcloud_logo" objectText="NextCloud Storage" objectSubText="Dropbox but better"
    anchorLink="https://cloud.sussy.tech" menuColor="blue" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
