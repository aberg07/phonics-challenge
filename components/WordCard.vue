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
    <div class="card-wrapper flex flex-col gap-y-8 justify-center items-center my-2">
        <div class="card bg-white rounded-xl border-4 border-sky-300 lg:w-1/3 md:w-1/2 h-80 flex justify-center items-center">
            <img class="lg:w-52 md:w-56" :src="props.imgPath" />
        </div>
        <audio id="word-sound">
            <source :src="getSoundPath" type="audio/mpeg">
        </audio>
        <font-awesome-icon icon="fa-solid fa-volume-high" size="4x" class="hover:cursor-pointer" @click="playSound">
        </font-awesome-icon>
    </div>
</template>