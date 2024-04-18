<script setup lang="ts">
    interface wordCard {
        word: string,
        path: string
    }
    const levelOneWords: wordCard[] = [
        {word: "In", path: '/_nuxt/assets/images/in-with-arrow.png'},
        {word: "Tap", path: '/_nuxt/assets/images/tap.png'},
        {word: "Nap", path: '/_nuxt/assets/images/nap.png'},
        {word: "Pan", path: '/_nuxt/assets/images/pan.png'},
        {word: "Pat", path: '/_nuxt/assets/images/pat.png'},
        {word: "Pin", path: '/_nuxt/assets/images/pin.png'},
        {word: "Snap", path: '/_nuxt/assets/images/snap.png'},
        {word: "Paint", path: '/_nuxt/assets/images/paint.png'},
        {word: "Pants", path: '/_nuxt/assets/images/pants.png'}
    ];
</script>

<template>
    <Game :wordDeck= levelOneWords />
</template>