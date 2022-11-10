<!--script defer setup lang="ts">
    // No need for a setup script
</script-->

<template>
    <!--This instances the background objects required to make the background animations work.-->
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
</template>

<style scoped>
.bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg,
            rgb(30, 30, 30) 50%,
            rgb(5, 5, 5) 30%);
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
}

.bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 3s;
}

.bg3 {
    animation-duration: 5s;
}

@keyframes slide {
    0% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(25%);
    }
}
</style>