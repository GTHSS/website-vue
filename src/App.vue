<script setup lang="ts">
import MenuItem from "./components/MenuItem.vue";
import MenuDivisor from "./components/MenuDivisor.vue";
import PageAuthor from "./components/PageAuthor.vue";
import CenteredImage from "./components/CenteredImage.vue";
</script>

<template>
  <header>
    <CenteredImage
      imageTitle="Sussy Tech&trade;"
      imageAlt="Among Us Character Twerking"
      imageSrc="./images/amongus_buttdance.webp"
      imageSubTitle="Very suspicious indeed"
      sizeX="100"
      sizeY="100"
    />
  </header>

  <main>
    <MenuDivisor text="Our team" overrideCss="false" />
    <PageAuthor
      imageLink="./images/ivan.webp"
      imageAlternativeName="Ivans Profile Picture"
      objectText="not Ivan#0001"
      objectSubText="Gugugaga"
      anchorLink="https://discord.com/users/843818345291972629"
      menuColor="blue"
    />

    <PageAuthor
      imageLink="./images/airblow.webp"
      imageAlternativeName="TheAirBlow PFP"
      objectText="TheAirBlow#5375"
      objectSubText="Some random guy"
      anchorLink="https://discord.com/users/1011353533817290853"
      menuColor="blue"
    />

    <PageAuthor
      imageLink="./images/walter.jpg"
      imageAlternativeName="Masqrades Profile Picture"
      objectText="MasqradeOP⁴#6158"
      objectSubText="Hes dottik"
      anchorLink="https://discord.com/users/1010290469235871785"
      menuColor="blue"
    />

    <MenuDivisor text="Our projects" overrideCss="true" />

    <MenuItem
      imageLink="./images/ball.png"
      imageAlternativeName="overflow_logo"
      objectText="ServerOverflow"
      objectSubText="Spying on servers since 1998"
      anchorLink="https://search.sussy.tech"
      menuColor="brown"
    />


    <MenuItem
      imageLink="./images/robux.png"
      imageAlternativeName="robux_logo"
      objectText="free robux"
      objectSubText="I cba to fix fr"
      anchorLink="https://raytracing.tk"
      menuColor="green"
    />

    <MenuItem
      imageLink="./images/google-logo.png"
      imageAlternativeName="Google logo"
      objectText="Pixelimages"
      objectSubText="Google pixel boot images"
      anchorLink="https://cdn.sussy.tech/PixelImages/"
      menuColor="green"
    />

    <MenuDivisor text="Other stuff" overrideCss="true" />

    <MenuItem
      imageLink=" ./images/pterodactyl_logo.png"
      imageAlternativeName="pterodactyl_logo"
      objectText="Pterodactyl Control Panel"
      objectSubText="Game servers done easy"
      anchorLink="https://control.sussy.tech"
      menuColor="brown"
    />

    <MenuItem
      imageLink="./images/ubuntu_logo.webp"
      imageAlternativeName="ubuntu_logo"
      objectText="Cockpit Management Panel"
      objectSubText="Just because it looks cool"
      anchorLink="https://manage.sussy.tech"
      menuColor="orange"
    />

    <MenuItem
      imageLink="./images/nextcloud_logo.webp"
      imageAlternativeName="nextcloud_logo"
      objectText="NextCloud Storage"
      objectSubText="Doesent even work"
      anchorLink="https://cloud.sussy.tech"
      menuColor="blue"
    />

    <MenuItem
      imageLink="https://source.sussy.tech/assets/img/logo.svg"
      imageAlternativeName="gitea_logo"
      objectText="Gitea Source Control"
      objectSubText="GitHub but better"
      anchorLink="https://source.sussy.tech"
      menuColor="green"
    />

    <MenuItem
      imageLink="./images/virgin_logo.webp"
      imageAlternativeName="virgin_logo"
      objectText="Ivan's router"
      objectSubText="Virgin Media Hub 3.0"
      anchorLink="https://router.sussy.tech"
      menuColor="red"
    />

    <MenuItem
      imageLink="./images/blob_dance.gif"
      imageAlternativeName="emoji_cat_dance_gif"
      objectText="Time to party"
      objectSubText="Click click."
      anchorLink="./party.html"
      menuColor="rainbow"
    />
  </main>
</template>
