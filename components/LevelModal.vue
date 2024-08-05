<script setup lang="ts">
    const props = defineProps({
        path: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    })
    const levelOneCards = [
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png", soundPath: "/_nuxt/assets/sounds/snake.mp3"},
        {word: "apple", imgPath: "/_nuxt/assets/images/apple.png", soundPath: "/_nuxt/assets/sounds/apple.mp3"},
        {word: "tiger", imgPath: "/_nuxt/assets/images/tiger.png", soundPath: "/_nuxt/assets/sounds/tiger.mp3"},
        {word: "ink", imgPath: "/_nuxt/assets/images/ink.png", soundPath: "/_nuxt/assets/sounds/ink.mp3"},
        {word: "pencil", imgPath: "/_nuxt/assets/images/pencil.png", soundPath: "/_nuxt/assets/sounds/pencil.mp3"},
        {word: "nest", imgPath: "/_nuxt/assets/images/nest.png", soundPath: "/_nuxt/assets/sounds/nest.mp3"}
    ];
    /*
    const levelTwoCards = [
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png"},
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png"},
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png"},
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png"},
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png"},
        {word: "snake", imgPath: "/_nuxt/assets/images/snake.png"},
    ];
    */
    const currentDeck = computed(() => {
        switch (props.level) {
            case 1:
                return levelOneCards;
                break;
        }
    })
</script>

<template>
    <div class='modal-backdrop flex justify-center place-items-center bg-[#0000004D] fixed top-0 bottom-0 left-0 right-0'>
        <div class='modal flex flex-col shadow-2xl bg-white overflow-x-auto w-3/4 h-5/6 p-4 border-purple-400 border-4 rounded-2xl'>
            <div class="flex justify-end place-items-end">
                <font-awesome-icon class="hover:cursor-pointer mb-4 text-purple-400" size="2xl" icon="fa-regular fa-circle-xmark" @click="$emit('close')"></font-awesome-icon>
            </div>
            <div class="flex flex-row h-5/6 justify-center flex-wrap gap-2 p-4">
                <SampleCard v-for="card in currentDeck" :key="card.word" :word="card.word" :imgPath="card.imgPath" :soundPath="card.soundPath"></SampleCard>
            </div>
            <div class="flex flex-col justify-center place-items-center h-1/6">
                <a :href="props.path">
                    <button type="button" class="h-12 btn-next border-2 bg-purple-400 border-purple-400 rounded-2xl w-52 text-white">
                        <p class="text-center text-xl">がんばろう！</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style src="@fortawesome/fontawesome-svg-core/styles.css"></style>