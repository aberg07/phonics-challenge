<script setup lang="ts">
    const props = defineProps({
        word: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div class="card-wrapper flex justify-center items-center my-10">
        <div class="card bg-slate-200 rounded-xl border-2 border-orange-300 w-1/3 h-60 flex justify-center items-center">
            <img class="w-40" :src="props.path" />
        </div>
    </div>
</template>