<script setup lang="ts">
    interface wordCard {
        word: string,
        imgPath: string,
        soundPath: string
    }
    const levelOneWords: wordCard[] = [
        {word: "In", imgPath: '/images/in-with-arrow.png', soundPath:'/sounds/levels/level-one/in.mp3'},
        {word: "Tap", imgPath: '/images/tap.png', soundPath:'/sounds/levels/level-one/tap.mp3'},
        {word: "Nap", imgPath: '/images/nap.png', soundPath:'/sounds/levels/level-one/nap.mp3'},
        {word: "Pan", imgPath: '/images/pan.png', soundPath:'/sounds/levels/level-one/pan.mp3'},
        {word: "Pat", imgPath: '/images/pat.png', soundPath:'/sounds/levels/level-one/pat.mp3'},
        {word: "Pin", imgPath: '/images/pin.png', soundPath:'/sounds/levels/level-one/pin.mp3'},
        {word: "Pit", imgPath: '/images/pit.png', soundPath:'/sounds/levels/level-one/pit.mp3'},
        {word: "Snap", imgPath: '/images/snap.png', soundPath:'/sounds/levels/level-one/snap.mp3'},
        {word: "Pants", imgPath: '/images/pants.png', soundPath:'/sounds/levels/level-one/pants.mp3'}
    ];
</script>

<template>
    <Game :wordDeck= levelOneWords />
</template>