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
        const audioElement = document.getElementById('word-sound');
        audioElement.load(); //reloads audio element. If this is not present, it only plays the first sound file given
        audioElement.play();
    }
</script>

<template>
    <div class="card-wrapper flex flex-col gap-y-8 justify-center items-center my-10">
        <div class="card bg-slate-200 rounded-xl border-2 border-orange-300 w-1/3 h-80 flex justify-center items-center">
            <img class="w-52" :src="props.imgPath" />
        </div>
        <audio id="word-sound">
            <source :src="getSoundPath" type="audio/mpeg">
        </audio>
        <font-awesome-icon icon="fa-solid fa-volume-high" size="3x" class="hover:cursor-pointer" @click="playSound"/>
        <p>{{ $props.soundPath }}</p>
    </div>
</template>