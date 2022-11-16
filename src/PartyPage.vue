<script setup lang="ts">
import CenteredText from './components/CenteredText.vue';
import { playAudio } from './ts/audioPlayer';
playAudio('./audio/party.mp3')
console.log("Audio started.");
</script>
<template>
    <main>
        <CenteredText content="Don't let the party die!" />

        <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
            <img alt="party-emoji" src="/images/blob_dance.gif" width="200" height="200">
        </div>
    </main>
</template>