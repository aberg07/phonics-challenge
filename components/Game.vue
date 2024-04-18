<script setup lang="ts">
    interface wordCard {
      word: string,
      path: string
    }
    const props = defineProps({
      wordDeck: {
        type: Array<wordCard>,
        required: true
      }
    })
  const wordDeck = props.wordDeck;
  const deckIndex = ref(0);
  watch(deckIndex, (newIndex) => {
    if (newIndex >= wordDeck.length) deckIndex.value = 0;
  }, {flush: 'sync'}) //{flush: 'sync'} lets watcher fire before any Vue-managed updates. Without it, this throws an error as the currentWord computed function will attempt to run before the watcher checks if the index is valid
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
  const isFinished = ref(false);
  const hasAnswered = ref(false);
  const currentWord = computed(() => {
    return wordDeck[deckIndex.value].word
  });
  const numHints = ref(0);
  watch(numHints, (newNumHints) => {
    if (newNumHints > currentWord.value.length) numHints.value = currentWord.value.length-1;
  })
  //blankWord turns answer to blanks, e.g. "apple" will become _____
  const blankWord = currentWord.value.split('').fill('_');
  const hintWord = ref(blankWord);
  const hintmsg = ref('');
  //Tracking when the user asks for hints to prevent repeatedly asking for hints to encourage trying to figure out the answer in between hints.
  const gaveHint = ref(false);
  watch (userInput, () => {
    gaveHint.value = false;
  })
  const hintWordDisplay = computed(() => {
    return hintWord.value.join('');
  })
  const showHintModal = ref(false);

  function submitAnswer() {
    if (userInput.value.toLowerCase() === currentWord.value.toLowerCase() && !hasAnswered.value) 
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
    hasAnswered.value = true;
  }
  function reset() {
    hasAnswered.value = false;
    isCorrect.value = false;
    userInput.value = '';
    numHints.value = 0;
    currentPointValue.value = pointValue.value;
    hintWord.value = blankWord; //increasing index before resetting hint word as it depends on the current word
    if (deckIndex.value == wordDeck.length -1) {
      deckIndex.value = 0;
      isFinished.value = false;
      points.value = 0;
    }
  }
  function nextCard() {
    if (deckIndex.value+1 >= wordDeck.length) isFinished.value = true;
    else {
      reset();
      deckIndex.value++;
    }
  }
  function getHint() {
    gaveHint.value = true;
    hintWord.value = currentWord.value.split('').fill('_');
    const hintIndex = getWrongIndex()!; //The exclamation mark tells TS that the function will not return undefined
    switch(hintIndex) {
      case -1: //No wrong index was found
        hintmsg.value = 'とてもいい感じ！';
        showHintModal.value = true;
        break;
      case -2: //The user's input is too long
        hintmsg.value = 'この答えは長すぎます。'
        showHintModal.value = true;
        numHints.value++;
        currentPointValue.value -= hintPenalty.value;
        break;
      default:
        for (let i = 0; i <= hintIndex; i++) {
          hintWord.value[i] = currentWord.value[i];
        }
        numHints.value++;
        currentPointValue.value -= hintPenalty.value;
        break;
    }
  }
  function getWrongIndex() { //Will be used in getHint() to return the index where the user's input differs from the answer
    if (userInput.value === '') return 0;
    else if (userInput.value.toLowerCase() === currentWord.value.toLowerCase()) return -1; //user's answer is already correct
    else if (userInput.value.length > currentWord.value.length) return -2; //user's answer is longer than correct answer
    //Turning the answer and user input strings into arrays to be compared
    const currentWordArray = currentWord.value.split('');
    const userInputArray = userInput.value.split('');
    for (let i = 0; i < userInputArray.length; i++) {
      if (i >= currentWordArray.length) return -1;
      else if (userInputArray[i].toLowerCase() != currentWordArray[i].toLowerCase()) return i;
      else if (i == userInputArray.length-1) return i+1;
    }
  }
</script>

<template>
  <div class="h-dvh">
    <h1 class="text-4xl text-center">Phonics Challenge</h1>
    <p class="text-2xl text-left">Points: {{ points }} ({{ currentPointValue }})</p>
    <WordCard :word=wordDeck[deckIndex].word :path="wordDeck[deckIndex].path"/>
    <div class="h-8">
      <p v-show="numHints > 0" class="text-2xl text-center tracking-widest">{{ hintWordDisplay }}</p>
    </div>
    <form class="answer-input flex flex-col justify-center items-center" @submit.prevent="submitAnswer">
        <label for="answer">Answer</label>
        <input type="text" v-model="userInput" id="answer" class="border-2 rounded-md border-zinc-950 w-80 text-center" :disabled="hasAnswered">
        <div class="w-80 flex items-center justify-between">
          <input type="submit" value="Submit" class="border-2 rounded-full bg-blue-400 text-white border-blue-400 w-20 cursor-pointer">
          <input type='button' :disabled="gaveHint" value="Hint" @click='getHint' class="border-2 rounded-full bg-blue-400 text-white border-blue-400 w-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        </div>
    </form>
    <FeedbackModal v-if="showHintModal" @next="showHintModal = false">
      <template v-slot:body>
        {{ hintmsg }}
      </template>
      <template v-slot:button-text>
        がんばって！
      </template>
    </FeedbackModal>
    <FeedbackModal v-if="hasAnswered && isCorrect" @next="nextCard">
      <template v-slot:body>
        やった！
      </template>
      <template v-slot:button-text>
        次へ
      </template>
    </FeedbackModal>
    <FeedbackModal v-else-if="hasAnswered && !isCorrect" @next="hasAnswered = false">
      <template v-slot:body>
        Keep trying...
      </template>
      <template v-slot:button-text>
        やり直す
      </template>
    </FeedbackModal>
    <FeedbackModal :isFinal="true" v-if="isFinished" @next="reset">
      <template #body>
        Finished!
      </template>
      <template #button-text>
        やり直す
      </template>
    </FeedbackModal>
  </div>
</template>