<script setup lang="ts">
    const props = defineProps({
        path: {
            type: String,
        }
    })
</script>

<template>
    <a class="w-3/4 hover:cursor-pointer" :href=props.path>
        <div class="level-card border-gray-600 border-2 w-full h-40 rounded-xl shadow-xl">
            <h2 class="text-2xl text-center">
                <slot name="level-text"></slot>
            </h2>
            <p class="text-blue-400 mt-16 text-center">
                <slot name="sub-text"></slot>
            </p>
        </div>
    </a>
</template>