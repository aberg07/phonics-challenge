<script setup lang="ts">
    interface wordCard {
        word: string,
        imgPath: string,
        soundPath: string
    }
    const levelOneWords: wordCard[] = [
        {word: "In", imgPath: '/_nuxt/assets/images/in-with-arrow.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/in.mp3'},
        {word: "Tap", imgPath: '/_nuxt/assets/images/tap.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/tap.mp3'},
        {word: "Nap", imgPath: '/_nuxt/assets/images/nap.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/nap.mp3'},
        {word: "Pan", imgPath: '/_nuxt/assets/images/pan.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/pan.mp3'},
        {word: "Pat", imgPath: '/_nuxt/assets/images/pat.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/pat.mp3'},
        {word: "Pin", imgPath: '/_nuxt/assets/images/pin.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/pin.mp3'},
        {word: "Pit", imgPath: '/_nuxt/assets/images/pit.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/pit.mp3'},
        {word: "Snap", imgPath: '/_nuxt/assets/images/snap.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/snap.mp3'},
        {word: "Pants", imgPath: '/_nuxt/assets/images/pants.png', soundPath:'/_nuxt/assets/sounds/levels/level-one/pants.mp3'}
    ];
</script>

<template>
    <Game :wordDeck= levelOneWords />
</template>