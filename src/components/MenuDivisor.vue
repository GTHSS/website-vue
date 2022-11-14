<script setup lang="ts">
const props = defineProps<{
    text: string,
    overrideCss: string // Must be a True-False value.
}>();
let cssClass = "separator";
let cssCustomized = "font-size: 15px";
if (toBoolean(props.overrideCss)) {
    cssClass = '';
} else {
    cssCustomized = '';
}
</script>

<script lang="ts">
function toBoolean(str: string): Boolean {
    return str == 'true' || str == 'True';
}
</script>

<template>
    <h1 :class='cssClass' :style="cssCustomized">
        {{ text }}
    </h1>
</template>

<style scoped>
.separator {
    font-size: 15px;
}
</style>