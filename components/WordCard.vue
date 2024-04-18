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
    <div class="card-wrapper flex flex-col gap-y-8 justify-center items-center my-10">
        <div class="card bg-slate-200 rounded-xl border-2 border-orange-300 w-1/3 h-80 flex justify-center items-center">
            <img class="w-52" :src="props.path" />
        </div>
        <font-awesome-icon icon="fa-solid fa-volume-high" size="3x" class="hover:cursor-pointer"/>
    </div>
</template>