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
    });
    const getSoundPath = computed(() => {
        return props.soundPath;
    })
    function playSound() {
        const audioElement = document.getElementById('word-sound') as HTMLAudioElement; //Tells typescript that this is in fact an audio element so it doesn't highlight it as an error
        audioElement.load(); //reloads audio element. If this is not present, it only plays the first sound file given
        audioElement.play();
    }
</script>

<template>
    <div class="card-wrapper flex flex-col gap-y-4 justify-center items-center my-2">
        <div class="card bg-white rounded-xl border-4 border-sky-300 w-4/5 h-80 lg:w-2/5 md:w-2/3 lg:h-[22rem] md:h-96 flex justify-center items-center">
            <img class="w-56 lg:w-48 md:w-64" :src="props.imgPath" />
        </div>
        <audio id="word-sound">
            <source :src="getSoundPath" type="audio/mpeg">
        </audio>
        <img class="w-24 lg:w-16 md:w-24 hover:cursor-pointer" :src="'/icons/volume-icon.png'" @click="playSound">
    </div>
</template>