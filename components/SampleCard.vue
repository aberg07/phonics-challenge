<script setup lang="ts">
    const props = defineProps({
        word: {
            type: String,
            required: true
        },
        phonicSound: {
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
    const getHighlightIndex = computed(() => {
        return props.word.search(props.phonicSound);
    })
    function playSound() {
        const audioElement = document.getElementById(`word-sound-${props.word}`) as HTMLAudioElement; //Tells typescript that this is in fact an audio element so it doesn't highlight it as an error
        audioElement.load(); //reloads audio element. If this is not present, it only plays the first sound file given
        audioElement.play();
    }
</script>

<template>
    <div class="flex flex-col flex-wrap justify-evenly items-center border-2 bg-white border-purple-400 rounded-xl md:h-1/2 md:w-1/4 hover:cursor-pointer" @click="playSound">
        <div class="h-3/5 flex flex-col items-center justify-center">
            <img class="lg:w-28 md:w-32" :src="imgPath">
        </div>
        <audio :id="`word-sound-${word}`" volume="1">
            <source :src="getSoundPath" type="audio/mpeg">
        </audio>
        <div class="flex flex-col items-center justify-center">
            <img class="w-8 md:w-16" src="~/assets/icons/volume-icon.png">
            <!-- If the phonic sound introduced is at the start of the word, simply color the phonic sound red and the rest in black -->
            <p v-if="getHighlightIndex==0" class="text-2xl md:text-3xl"><span class="text-red-500">{{ props.word.substring(getHighlightIndex, getHighlightIndex+props.phonicSound.length) }}</span><span>{{ props.word.substring(1) }}</span></p>
            <!-- Otherwise color letters in black up until the phonic sound occurs, where it will be colored red. Any letters that occur afterward will be in black -->
            <p v-else class="text-2xl md:text-3xl"><span>{{ props.word.substring(0, getHighlightIndex) }}</span><span class="text-red-500">{{ props.word.substring(getHighlightIndex, getHighlightIndex+props.phonicSound.length) }}</span><span>{{ props.word.substring(getHighlightIndex+props.phonicSound.length) }}</span></p>
        </div>
    </div>
</template>