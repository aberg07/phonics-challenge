<script setup lang="ts">
    const props = defineProps({
        path: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class='modal-backdrop flex justify-center place-items-center bg-[#0000004D] fixed top-0 bottom-0 left-0 right-0'>
        <div class='modal flex flex-col shadow-2xl bg-violet-200 overflow-x-auto w-3/4 h-5/6 p-8 border-purple-400 border-2 rounded-2xl'>
            <div class="flex justify-end place-items-end">
                <font-awesome-icon class="hover:cursor-pointer mb-4" size="2xl" icon="fa-regular fa-circle-xmark" @click="$emit('close')"></font-awesome-icon>
                <!--
                <button class="border-2 w-8 h-8 rounded-2xl bg-sky-200 border-sky-200 mb-4" @click="$emit('close')">
                    <span class="text-white">X</span>
                </button>
                -->
            </div>
            <div class="flex flex-col h-5/6 overflow-y-auto border-purple-300 border-2 p-4">
                <ContentDoc path="/test"></ContentDoc>
            </div>
            <div class="flex flex-col justify-center place-items-center h-1/6">
                <a :href="props.path">
                    <button type="button" class="btn-next border-2 w-52">
                        <slot name="button-text"></slot>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<style src="@fortawesome/fontawesome-svg-core/styles.css"></style>