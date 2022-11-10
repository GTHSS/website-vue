<script setup lang="ts">
import MenuItem from "./components/MenuItem.vue";
import Background from "./components/BackgroundAnimation.vue";
</script>

<template>

    <!--#region Available Sub-Websites-->
    <main>
        <MenuItem imageLink="./images/pterodactyl_logo.png" imageAlternativeName="pterodactyl_logo"
            objectText="Pterodactyl Control Panel" objectSubText="Game servers done easy"
            anchorLink="https://control.sussy.tech" menuColor="brown" />

        <MenuItem imageLink="./images/ubuntu_logo.webp" imageAlternativeName="ubuntu_logo"
            objectText="Cockpit Management Panel" objectSubText="Just because it looks cool"
            anchorLink="https://manage.sussy.tech" menuColor="orange" />

        <MenuItem imageLink="./images/nextcloud_logo.webp" imageAlternativeName="nextcloud_logo"
            objectText="NextCloud Storage" objectSubText="Dropbox but better" anchorLink="https://cloud.sussy.tech"
            menuColor="blue" />

        <MenuItem imageLink="https://source.sussy.tech/assets/img/logo.svg" imageAlternativeName="gitea_logo"
            objectText="Gitea Source Control" objectSubText="GitHub but better" anchorLink="https://source.sussy.tech"
            menuColor="green" />

        <MenuItem imageLink="./images/virgin_logo.webp" imageAlternativeName="virgin_logo" objectText="Ivan's router"
            objectSubText="Virgin Media Hub 3.0" anchorLink="https://router.sussy.tech" menuColor="red" />

        <MenuItem imageLink="./images/blob_dance.gif" imageAlternativeName="emoji_cat_dance_gif"
            objectText="Time to party" objectSubText="Wah? IDK either, just click it." anchorLink="./party.html"
            menuColor="rainbow" />

    </main>
    <!--#endregion Available Sub-Websites-->

    <Background />
</template>