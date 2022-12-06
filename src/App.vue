<script setup lang="ts">
import MenuItem from "./components/MenuItem.vue";
import MenuDivisor from "./components/MenuDivisor.vue";
import PageAuthor from "./components/PageAuthor.vue";
import CenteredImage from "./components/CenteredImage.vue";
</script>

<template>

    <header>
        <CenteredImage imageTitle="Sussy Technology&trade;" imageAlt="Among Us Character Twerking"
            imageSrc="./images/amongus_buttdance.webp" imageSubTitle="Very suspicious indeed" sizeX='100' sizeY="100" />
    </header>

    <main>
        <MenuDivisor text="Our team" overrideCss="false" />
        <PageAuthor imageLink="./images/ivan.webp" imageAlternativeName="Ivans Profile Picture"
            objectText="not Ivan#4238" objectSubText="He forgor everything"
            anchorLink="https://discord.com/users/843818345291972629" menuColor="blue" />

        <PageAuthor imageLink="./images/airblow.png" imageAlternativeName="TheAirBlow PFP"
            objectText="TheAirBlow#5375" objectSubText="Some random guy"
            anchorLink="https://discord.com/users/1011353533817290853" menuColor="blue" />

        <PageAuthor imageLink="./images/walter.jpg" imageAlternativeName="Masqrades Profile Picture"
            objectText="MasqradeOP⁴#6158" objectSubText="Typical Rust enjoyer"
            anchorLink="https://discord.com/users/1010290469235871785" menuColor="blue" />

        <MenuDivisor text="Other stuff" overrideCss="true" />
        <!--#region Available Sub-Websites-->
        <MenuItem imageLink=" ./images/pterodactyl_logo.png" imageAlternativeName="pterodactyl_logo"
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

        <!--#endregion Available Sub-Websites-->
        <MenuDivisor text="Our Current projects" overrideCss="true" />

        <MenuItem imageLink="./images/notepad_logo.webp" imageAlternativeName="overflow_logo"
            objectText="Server Overflow" objectSubText="Search for servers" anchorLink="https://search.sussy.tech"
            menuColor="blue" />
    </main>

</template>