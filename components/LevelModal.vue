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
        {word: "snake", phonicSound: "s", imgPath: "/_nuxt/assets/images/snake.png", soundPath: "/_nuxt/assets/sounds/samples/level-one/snake.mp3"},
        {word: "apple", phonicSound: "a", imgPath: "/_nuxt/assets/images/apple.png", soundPath: "/_nuxt/assets/sounds/samples/level-one/apple.mp3"},
        {word: "tiger", phonicSound: "t", imgPath: "/_nuxt/assets/images/tiger.png", soundPath: "/_nuxt/assets/sounds/samples/level-one/tiger.mp3"},
        {word: "ink", phonicSound: "i", imgPath: "/_nuxt/assets/images/ink.png", soundPath: "/_nuxt/assets/sounds/samples/level-one/ink.mp3"},
        {word: "pencil", phonicSound: "p", imgPath: "/_nuxt/assets/images/pencil.png", soundPath: "/_nuxt/assets/sounds/samples/level-one/pencil.mp3"},
        {word: "nest", phonicSound: "n", imgPath: "/_nuxt/assets/images/nest.png", soundPath: "/_nuxt/assets/sounds/samples/level-one/nest.mp3"}
    ];
    const levelTwoCards = [
        {word: "lock", phonicSound: "ck", imgPath: "/_nuxt/assets/images/lock.png", soundPath: "/_nuxt/assets/sounds/samples/level-two/lock.mp3"},
        {word: "egg", phonicSound: "e", imgPath: "/_nuxt/assets/images/egg.png", soundPath: "/_nuxt/assets/sounds/samples/level-two/egg.mp3"},
        {word: "hat", phonicSound: "h", imgPath: "/_nuxt/assets/images/hat.png", soundPath: "/_nuxt/assets/sounds/samples/level-two/hat.mp3"},
        {word: "rock", phonicSound: "r", imgPath: "/_nuxt/assets/images/rock.png", soundPath: "/_nuxt/assets/sounds/samples/level-two/rock.mp3"},
        {word: "milk", phonicSound: "m", imgPath: "/_nuxt/assets/images/milk.png", soundPath: "/_nuxt/assets/sounds/samples/level-two/milk.mp3"},
        {word: "dog", phonicSound: "d", imgPath: "/_nuxt/assets/images/dog.png", soundPath: "/_nuxt/assets/sounds/samples/level-two/dog.mp3"}
    ];
    const currentDeck = computed(() => {
        switch (props.level) {
            case 1:
                return levelOneCards;
                break;
            case 2:
                return levelTwoCards;
                break;
        }
    })
</script>

<template>
    <div class='modal-backdrop flex justify-center place-items-center bg-[#0000004D] fixed top-0 bottom-0 left-0 right-0 z-10'>
        <div class='modal flex flex-col shadow-2xl bg-white overflow-x-auto w-3/4 h-5/6 p-4 border-purple-400 border-4 rounded-2xl'>
            <div class="flex justify-end place-items-end h-min">
                <font-awesome-icon class="hover:cursor-pointer text-purple-400" size="2xl" icon="fa-regular fa-circle-xmark" @click="$emit('close')"></font-awesome-icon>
            </div>
            <div class="flex flex-row h-5/6 justify-center flex-wrap gap-2">
                <SampleCard v-for="card in currentDeck" :key="card.word" :phonicSound="card.phonicSound" :word="card.word" :imgPath="card.imgPath" :soundPath="card.soundPath"></SampleCard>
            </div>
            <div class="flex flex-col justify-center place-items-center h-1/6">
                <a :href="props.path">
                    <button type="button" class="h-12 btn-next border-2 bg-purple-400 border-purple-400 rounded-2xl w-52 text-white md:w-80 md:h-20">
                        <p class="text-center text-xl md:text-4xl">がんばろう！</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style src="@fortawesome/fontawesome-svg-core/styles.css"></style>