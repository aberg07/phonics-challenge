<script setup lang="ts">
    interface wordCard {
      word: string,
      imgPath: string,
      soundPath: string
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
  const maxPoints = wordDeck.length * 100;
  const stars = ref(0);
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
    stars.value = 0;
    currentPointValue.value = pointValue.value;
    hintWord.value = blankWord; //increasing index before resetting hint word as it depends on the current word
    if (deckIndex.value == wordDeck.length -1) {
      deckIndex.value = 0;
      isFinished.value = false;
      points.value = 0;
    }
  }
  function nextCard() {
    if (deckIndex.value+1 >= wordDeck.length) {
      if ((points.value/maxPoints) < 0.4) stars.value = 1;
      else if ((points.value/maxPoints) >= 0.4 && (points.value/maxPoints) < 0.7) stars.value = 2;
      else if ((points.value/maxPoints) >= 0.7 && (points.value/maxPoints) < 1) stars.value = 3;
      else if ((points.value/maxPoints) == 1) stars.value = 4;
      isFinished.value = true;
    }
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
  <div class="h-auto">
    <div class="flex flex-col justify-center items-center">
      <div class="bg-sky-300 w-auto border-gray-600 border-l-2 border-b-2 border-r-2 p-2 rounded-b-xl">
        <p class="lg:text-3xl md:text-5xl text-left text-white">Points: {{ points }}</p>
      </div>
    </div>
    <WordCard :word=wordDeck[deckIndex].word :imgPath="wordDeck[deckIndex].imgPath" :soundPath="wordDeck[deckIndex].soundPath"/>
    <div class="h-8">
      <p v-show="numHints > 0" class="lg:text-3xl md:text-5xl font-bold text-white text-center tracking-widest">{{ hintWordDisplay }}</p>
    </div>
    <form class="md:my-6 answer-input flex flex-col justify-center items-center" @submit.prevent="submitAnswer">
      <div class="bg-white rounded-xl border-sky-300 border-4 answer-input flex flex-col justify-center items-center gap-y-4 lg:w-1/3 lg:h-36 md:w-1/2 md:h-56">
        <label for="answer" class="lg:text-2xl md:text-4xl">Answer</label>
        <input type="text" v-model="userInput" id="answer" class="border-2 rounded-md border-zinc-950 w-80 text-center lg:text-2xl md:text-3xl" :disabled="hasAnswered">
        <div class="w-80 flex items-center justify-between md:gap-x-4">
          <input type='button' :disabled="gaveHint" value="Hint" @click='getHint' class="lg:text-2xl md:text-3xl lg:w-1/3 md:w-1/2 border-2 rounded-full bg-blue-400 text-white border-blue-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          <input type="submit" value="Submit" class="lg:text-2xl md:text-3xl lg:w-1/3 md:w-1/2 border-2 rounded-full bg-blue-400 text-white border-blue-400 cursor-pointer">
        </div>
      </div>
    </form>
    <FeedbackModal v-if="showHintModal" @next="showHintModal = false">
      <template v-slot:body>
        <p class="lg:text-3xl md:text-4xl">{{ hintmsg }}</p>
      </template>
      <template v-slot:button-text>
        <p class="lg:text-3xl md:text-4xl">Keep trying!</p>
      </template>
    </FeedbackModal>
    <FeedbackModal v-if="hasAnswered && isCorrect" @next="nextCard">
      <template v-slot:body>
        <p class="lg:text-4xl md:text-5xl">Nice!</p>
      </template>
      <template #msg>
        <img class="lg:w-1/2 md:w-3/4" src="/images/feedback/maru.png" />
      </template>
      <template v-slot:button-text>
        <p class="lg:text-3xl md:text-4xl">Next</p>
      </template>
    </FeedbackModal>
    <FeedbackModal v-else-if="hasAnswered && !isCorrect" @next="hasAnswered = false">
      <template v-slot:body>
        <p class="lg:text-4xl md:text-5xl">Keep trying!</p>
      </template>
      <template #msg>
        <img class="lg:w-1/2 md:w-3/4" src="/images/feedback/batsu.png" />
      </template>
      <template v-slot:button-text>
        <p class="lg:text-3xl md:text-4xl">Try again</p>
      </template>
    </FeedbackModal>
    <FeedbackModal :isFinal="true" v-if="isFinished" @next="reset">
      <template #body>
        <p class="lg:text-4xl md:text-6xl">Finished!</p>
      </template>
      <template #msg v-if="stars==1">
        <img class="w-3/4" src="/images/feedback/1 star.png" />
      </template>
      <template #msg v-else-if="stars==2">
        <img class="w-3/4" src="/images/feedback/2 stars.png" />
      </template>
      <template #msg v-else-if="stars==3">
        <img class="w-3/4" src="/images/feedback/3 stars.png" />
      </template>
      <template #msg v-else-if="stars==4">
        <img class="w-3/4" src="/images/feedback/3 stars perfect.png" />
      </template>
      <template #button-text>
        <p class="lg:text-3xl md:text-4xl">やり直す</p>
      </template>
    </FeedbackModal>
  </div>
</template>