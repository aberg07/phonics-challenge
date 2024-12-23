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
        {word: "snake", phonicSound: "s", imgPath: "/images/snake.png", soundPath: "/sounds/samples/level-one/snake.mp3"},
        {word: "apple", phonicSound: "a", imgPath: "/images/apple.png", soundPath: "/sounds/samples/level-one/apple.mp3"},
        {word: "tiger", phonicSound: "t", imgPath: "/images/tiger.png", soundPath: "/sounds/samples/level-one/tiger.mp3"},
        {word: "ink", phonicSound: "i", imgPath: "/images/ink.png", soundPath: "/sounds/samples/level-one/ink.mp3"},
        {word: "pencil", phonicSound: "p", imgPath: "/images/pencil.png", soundPath: "/sounds/samples/level-one/pencil.mp3"},
        {word: "nest", phonicSound: "n", imgPath: "/images/nest.png", soundPath: "/sounds/samples/level-one/nest.mp3"}
    ];
    const levelTwoCards = [
        {word: "lock", phonicSound: "ck", imgPath: "/images/lock.png", soundPath: "/sounds/samples/level-two/lock.mp3"},
        {word: "egg", phonicSound: "e", imgPath: "/images/egg.png", soundPath: "/sounds/samples/level-two/egg.mp3"},
        {word: "hat", phonicSound: "h", imgPath: "/images/hat.png", soundPath: "/sounds/samples/level-two/hat.mp3"},
        {word: "rock", phonicSound: "r", imgPath: "/images/rock.png", soundPath: "/sounds/samples/level-two/rock.mp3"},
        {word: "milk", phonicSound: "m", imgPath: "/images/milk.png", soundPath: "/sounds/samples/level-two/milk.mp3"},
        {word: "dog", phonicSound: "d", imgPath: "/images/dog.png", soundPath: "/sounds/samples/level-two/dog.mp3"}
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
                <div class="fixed top-24 hover:cursor-pointer flex lg:w-16 lg:h-16 md:w-12 md:h-12 w-12 h-12 flex-col justify-center items-center border-2 rounded-full border-purple-400 bg-purple-400" @click="$emit('close')">
                    <span class="text-white text-3xl">X</span>
                </div>
            </div>
            <div class="flex flex-row h-auto md:h-5/6 justify-center flex-wrap gap-2">
                <SampleCard v-for="card in currentDeck" :key="card.word" :phonicSound="card.phonicSound" :word="card.word" :imgPath="card.imgPath" :soundPath="card.soundPath"></SampleCard>
            </div>
            <div class="flex flex-row justify-center place-items-center h-1/6 my-2">
                <a :href="props.path">
                    <button type="button" class="h-12 btn-next border-2 bg-purple-400 border-purple-400 rounded-2xl w-52 text-white md:w-80 md:h-20">
                        <p class="text-center text-2xl md:text-4xl">がんばろう！</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>