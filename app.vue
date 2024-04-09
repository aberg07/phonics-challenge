<script setup lang="ts">
  const wordDeck = [{word: "Apple", path: '/_nuxt/assets/images/apple.png'}, {word: "Banana", path: '/_nuxt/assets/images/banana.png'}]
  const deckIndex = ref(0);
  watch(deckIndex, (newIndex) => {
    if (newIndex >= wordDeck.length) deckIndex.value = 0;
  }, {flush: 'sync'}) //{flush: 'sync'} lets watcher fire before any Vue-managed updates. Without it, this throws an arror as the currentWord computed function will attempt to run before the watcher checks if the index is valid
  const pointValue = ref(100);
  const currentPointValue = ref(pointValue.value);
  watch(currentPointValue, (newPointValue) => {
    if (newPointValue < 0) currentPointValue.value = 0;
  })
  const points = ref(0);
  const hintPenalty = computed(() => {
    return (pointValue.value / currentWord.value.length);
  })
  const userInput = ref('');
  const isCorrect = ref(false);
  const hasAnswered = ref(false);
  const currentWord = computed(() => {
    return wordDeck[deckIndex.value].word
  });
  const numHints = ref(0);
  watch(numHints, (newNumHints) => {
    if (newNumHints > currentWord.value.length) numHints.value = currentWord.value.length-1;
  })
  const blankWord = computed(() => {
    return currentWord.value.split('').fill('_');
  });
  //ex. apple will become _____
  const hintWord = ref(blankWord.value);
  const hintWordDisplay = computed(() => {
    return hintWord.value.join('');
  })

  function submitAnswer() {
    if (userInput.value.toLowerCase() === wordDeck[deckIndex.value].word.toLowerCase()) 
    {
      if (currentPointValue.value > 0) {
        const oldPoints = points.value; //Get user's initial value to know when to stop animation
        const increaseScore = setInterval(() => { //For points going up animation
        points.value += currentPointValue.value/(Math.round(currentPointValue.value/2));
        points.value = Math.trunc(points.value)
        if (Math.trunc(points.value - oldPoints) >= currentPointValue.value) clearInterval(increaseScore);
      }, 10)
      }
      isCorrect.value = true;
    }
    else isCorrect.value = false;
    hasAnswered.value = true;
  }
  function nextCard() {
    hasAnswered.value = false;
    isCorrect.value = false;
    userInput.value = '';
    numHints.value = 0;
    currentPointValue.value = pointValue.value;
    deckIndex.value++;
    hintWord.value = blankWord.value;
  }
  function getHint() {
    hintWord.value[numHints.value] = currentWord.value[numHints.value];
    numHints.value++;
    currentPointValue.value -= hintPenalty.value;
  }
</script>

<template>
  <div class="h-dvh">
    <h1 class="text-4xl text-center">Phonics Challenge</h1>
    <p class="text-2xl text-left">Points: {{ points }} ({{ currentPointValue }})</p>
    <WordCard :word=wordDeck[deckIndex].word :path="wordDeck[deckIndex].path"/>
    <p v-if="numHints > 0" class="text-2xl text-center tracking-widest">{{ hintWordDisplay }}</p>
    <form class="answer-input flex flex-col justify-center items-center" @submit.prevent="submitAnswer">
        <label for="answer">Answer</label>
        <input type="text" v-model="userInput" id="answer" class="border-2 border-zinc-950 w-80 text-center">
        <div class="w-80 flex items-center justify-between">
          <input type="submit" value="Submit" class="border-2 border-blue-400 w-20 cursor-pointer">
          <input type='button' value="Hint" @click='getHint' class="border-2 border-blue-400 w-20 cursor-pointer">
        </div>
    </form>
    <FeedbackModal v-if="hasAnswered && isCorrect" @next="nextCard">
        Yay!
    </FeedbackModal>
    <FeedbackModal v-else-if="hasAnswered && !isCorrect" @next="hasAnswered = false">
        Keep trying...
    </FeedbackModal>
  </div>
</template>
