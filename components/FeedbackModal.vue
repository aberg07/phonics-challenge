<script setup lang="ts">
const props = defineProps({
    isFinal: { //If this is the final modal screen (e.g. level is complete), determines whether or not to render the button to redirect to home page
        type: Boolean
    }
})
</script>

<template>
    <div class='modal-backdrop flex justify-center place-items-center bg-[#0000004D] fixed top-0 bottom-0 left-0 right-0'>
        <div class='modal flex flex-col shadow-2xl bg-[#FFFFFF] overflow-x-auto w-1/4 h-1/3'>
            <!--
            <div class="flex justify-end">
                <button type="button" class="btn-close border-2 w-8" @click="$emit('close')">X</button>
            </div>
            -->
            <div class="flex flex-col gap-y-8 justify-center place-items-center h-full">
                <div>
                    <slot name="body">
                    </slot>
                </div>
                <div>
                    <slot name="msg">
                    </slot>
                </div>
                <button type="button" class="btn-next border-2 w-52" @click="$emit('next')">
                    <slot name="button-text"></slot>
                </button>
                <a href="/">
                    <button v-if="props.isFinal" type="button" class="border-2 w-52">
                        ホームへ戻る
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>