<script setup lang="ts">
    interface wordCard {
        word: string,
        imgPath: string,
        soundPath: string
    }
    const levelTwoWords: wordCard[] = [
        {word: "Ink", imgPath: '/_nuxt/assets/images/ink.png', soundPath:'/_nuxt/assets/sounds/ink.mp3'},
        {word: "Can", imgPath: '/_nuxt/assets/images/can.png', soundPath:'/_nuxt/assets/sounds/can.mp3'},
        {word: "Ham", imgPath: '/_nuxt/assets/images/ham.png', soundPath:'/_nuxt/assets/sounds/ham.mp3'},
        {word: "Hat", imgPath: '/_nuxt/assets/images/hat.png', soundPath:'/_nuxt/assets/sounds/hat.mp3'},
        {word: "Hit", imgPath: '/_nuxt/assets/images/hit.png', soundPath:'/_nuxt/assets/sounds/hit.mp3'},
        {word: "Man", imgPath: '/_nuxt/assets/images/man.png', soundPath:'/_nuxt/assets/sounds/man.mp3'},
        {word: "Red", imgPath: '/_nuxt/assets/images/red.png', soundPath:'/_nuxt/assets/sounds/red.mp3'},
        {word: "Map", imgPath: '/_nuxt/assets/images/map.png', soundPath:'/_nuxt/assets/sounds/map.mp3'},
        {word: "Milk", imgPath: '/_nuxt/assets/images/milk.png', soundPath:'/_nuxt/assets/sounds/milk.mp3'},
        {word: "Mask", imgPath: '/_nuxt/assets/images/mask.png', soundPath:'/_nuxt/assets/sounds/mask.mp3'},
        {word: "Sick", imgPath: '/_nuxt/assets/images/sick.png', soundPath:'/_nuxt/assets/sounds/sick.mp3'},
        {word: "Tent", imgPath: '/_nuxt/assets/images/tent.png', soundPath:'/_nuxt/assets/sounds/tent.mp3'},
        {word: "Nest", imgPath: '/_nuxt/assets/images/nest.png', soundPath:'/_nuxt/assets/sounds/nest.mp3'},
        {word: "Hand", imgPath: '/_nuxt/assets/images/hand.png', soundPath:'/_nuxt/assets/sounds/hand.mp3'},
        {word: "Rest", imgPath: '/_nuxt/assets/images/rest.png', soundPath:'/_nuxt/assets/sounds/rest.mp3'},
        {word: "Kick", imgPath: '/_nuxt/assets/images/kick.png', soundPath:'/_nuxt/assets/sounds/kick.mp3'},
        {word: "Dress", imgPath: '/_nuxt/assets/images/dress.png', soundPath:'/_nuxt/assets/sounds/dress.mp3'},
        {word: "Stick", imgPath: '/_nuxt/assets/images/stick.png', soundPath:'/_nuxt/assets/sounds/stick.mp3'}
    ];
</script>

<template>
    <Game :wordDeck= levelTwoWords />
</template>