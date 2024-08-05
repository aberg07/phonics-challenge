<script setup lang="ts">
    const props = defineProps({
        word: {
            type: String,
            required: true
        },
        imgPath: {
            type: String,
            required: true
        },
        soundPath: {
            type: String,
            required: true
        }
    })
    const getSoundPath = computed(() => {
        return props.soundPath;
    })
    function playSound() {
        const audioElement = document.getElementById(`word-sound-${props.word}`) as HTMLAudioElement; //Tells typescript that this is in fact an audio element so it doesn't highlight it as an error
        audioElement.load(); //reloads audio element. If this is not present, it only plays the first sound file given
        audioElement.play();
    }
</script>

<template>
    <div class="flex flex-col flex-wrap justify-evenly items-center border-2 bg-white border-purple-400 rounded-xl w-1/4 h-1/2 hover:cursor-pointer" @click="playSound">
        <div class="h-3/5 flex flex-col items-center justify-center">
            <img class="w-40" :src="imgPath">
        </div>
        <audio :id="`word-sound-${word}`" volume="1">
            <source :src="getSoundPath" type="audio/mpeg">
        </audio>
        <div class="flex flex-col items-center justify-center">
            <img class="w-8 hover:cursor-pointer" src="/_nuxt/assets/icons/volume-icon.png">
            <p class="text-2xl"><span class="text-red-500">{{ props.word.substring(0,1) }}</span><span>{{ props.word.substring(1) }}</span></p>
        </div>
    </div>
</template>