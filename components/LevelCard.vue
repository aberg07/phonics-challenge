<script setup lang="ts">
    const props = defineProps({
        path: {
            type: String,
        },
        isDisabled: {
            type: Boolean
        }
    })
</script>

<template>
    <a class="w-11/12 lg:w-3/4 hover:cursor-pointer" :href=props.path>
        <div class="level-card border-gray-600 bg-sky-300 border-2 w-full lg:h-40 md:h-48 rounded-xl shadow-xl" :class="{disabled: isDisabled}">
            <h2 class="text-white text-center">
                <slot name="level-text"></slot>
            </h2>
            <p class="text-white mt-12 text-center font-semibold">
                <slot name="sub-text"></slot>
            </p>
        </div>
    </a>
</template>