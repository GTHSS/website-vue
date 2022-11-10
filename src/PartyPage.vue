<script setup lang="ts">
import CenteredText from './components/CenteredText.vue';
</script>
<template>
    <CenteredText content="Don't let the party die!" />

    <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
        <img alt="party-emoji" src="/images/blob_dance.gif" width="200" height="200">
    </div>
</template>