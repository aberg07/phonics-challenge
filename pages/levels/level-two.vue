<script setup lang="ts">
    interface wordCard {
        word: string,
        imgPath: string,
        soundPath: string
    }
    const levelTwoWords: wordCard[] = [
        {word: "ink", imgPath: '/_nuxt/assets/images/ink.png', soundPath:'/_nuxt/assets/sounds/levels/level-two/ink.mp3'},
        {word: "can", imgPath: '/_nuxt/assets/images/can.png', soundPath:'/_nuxt/assets/sounds/levels/level-two/can.mp3'},
        {word: "ham", imgPath: '/_nuxt/assets/images/ham.png', soundPath:'/_nuxt/assets/sounds/levels/level-two/ham.mp3'},
        {word: "hat", imgPath: '/_nuxt/assets/images/hat.png', soundPath:'/_nuxt/assets/sounds/hat.mp3'},
        {word: "hit", imgPath: '/_nuxt/assets/images/hit.png', soundPath:'/_nuxt/assets/sounds/hit.mp3'},
        {word: "man", imgPath: '/_nuxt/assets/images/man.png', soundPath:'/_nuxt/assets/sounds/man.mp3'},
        {word: "red", imgPath: '/_nuxt/assets/images/red.png', soundPath:'/_nuxt/assets/sounds/red.mp3'},
        {word: "map", imgPath: '/_nuxt/assets/images/map.png', soundPath:'/_nuxt/assets/sounds/map.mp3'},
        {word: "milk", imgPath: '/_nuxt/assets/images/milk.png', soundPath:'/_nuxt/assets/sounds/milk.mp3'},
        {word: "mask", imgPath: '/_nuxt/assets/images/mask.png', soundPath:'/_nuxt/assets/sounds/mask.mp3'},
        {word: "sick", imgPath: '/_nuxt/assets/images/sick.png', soundPath:'/_nuxt/assets/sounds/sick.mp3'},
        {word: "tent", imgPath: '/_nuxt/assets/images/tent.png', soundPath:'/_nuxt/assets/sounds/tent.mp3'},
        {word: "nest", imgPath: '/_nuxt/assets/images/nest.png', soundPath:'/_nuxt/assets/sounds/nest.mp3'},
        {word: "hand", imgPath: '/_nuxt/assets/images/hand.png', soundPath:'/_nuxt/assets/sounds/hand.mp3'},
        {word: "rest", imgPath: '/_nuxt/assets/images/rest.png', soundPath:'/_nuxt/assets/sounds/rest.mp3'},
        {word: "kick", imgPath: '/_nuxt/assets/images/kick.png', soundPath:'/_nuxt/assets/sounds/kick.mp3'},
        {word: "dress", imgPath: '/_nuxt/assets/images/dress.png', soundPath:'/_nuxt/assets/sounds/dress.mp3'},
        {word: "stick", imgPath: '/_nuxt/assets/images/stick.png', soundPath:'/_nuxt/assets/sounds/stick.mp3'}
    ];
</script>

<template>
    <Game :wordDeck= levelTwoWords />
</template>