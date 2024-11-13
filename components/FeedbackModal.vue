<script setup lang="ts">
const props = defineProps({
    isFinal: { //If this is the final modal screen (e.g. level is complete), determines whether or not to render the button to redirect to home page
        type: Boolean
    }
})
</script>

<template>
    <div class='modal-backdrop flex justify-center place-items-center bg-[#0000004D] fixed top-0 bottom-0 left-0 right-0'>
        <div class='modal flex flex-col shadow-2xl bg-[#FFFFFF] overflow-x-auto lg:w-1/4 lg:h-1/2 md:w-2/3 md:h-1/2 border-4 border-purple-400 rounded-2xl'>
            <div class="flex flex-col gap-y-8 justify-center place-items-center h-full">
                <div>
                    <slot name="body">
                    </slot>
                </div>
                <div class="flex justify-center place-items-center">
                    <slot name="msg">
                    </slot>
                </div>
                <button type="button" class="btn-next border-2 bg-purple-400 border-purple-400 text-white rounded-xl lg:w-52 md:w-96 md:h-20" @click="$emit('next')">
                    <slot name="button-text"></slot>
                </button>
                <a href="/">
                    <button v-if="props.isFinal" type="button" class="border-2 bg-purple-400 text-white border-purple-400 rounded-xl lg:w-52 md:w-96 md:h-20">
                        <p class="lg:text-xl md:text-4xl">ホームへ戻る</p>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>