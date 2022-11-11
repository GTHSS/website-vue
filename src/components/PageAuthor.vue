<script setup lang="ts">
import { verifyCssName } from '@/MenuItemColors';

const props =
    defineProps<{
        imageLink: string;
        imageAlternativeName: string;
        objectText: string;
        objectSubText: string;
        anchorLink: string;
        menuColor: string;
    }>();
let isValidColor: boolean = verifyCssName(props.menuColor);

if (!isValidColor)
    throw new Error("There is no color with such name.");

const cssClasses = "card " + props.menuColor;
const widthNormal = "70";
const heightNormal = "70";
const authorStyle = "border-radius:15px;";
</script>

<template>
    <div class="row">
        <div class="column">
            <div :class="cssClasses">
                <a :href="anchorLink"></a>
                <div class="container">
                    <h2>
                        <img :alt="imageAlternativeName" :style='authorStyle' :src="imageLink" :width="widthNormal"
                            :height="heightNormal" />
                    </h2>
                    <h2>{{ objectText }}</h2>
                    <p class="title">{{ objectSubText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row::after {
    content: "";
    clear: both;
    display: table;
}

div.card {
    position: relative;
}

div.card a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-decoration: none;
    /* No underlines on the link */
    z-index: 10;
    /* Places the link above everything else in the div */
    background-color: #FFF;
    /* Fix to make div clickable in IE */
    opacity: 0;
    /* Fix to make div clickable in IE */
    filter: alpha(opacity=1);
    /* Fix to make div clickable in IE */
}

.blue {
    border-left-color: #3d57d9;
}

.orange {
    border-left-color: rgb(255, 127, 0);
}

.brown {
    border-left-color: rgb(150, 75, 0);
}

.green {
    border-left-color: rgb(0, 255, 0);
}

.red {
    border-left-color: rgb(255, 0, 0);
}

.rainbow {
    animation: rainbow 2.5s linear;
    animation-iteration-count: infinite;
}
</style>