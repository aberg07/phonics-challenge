<script setup lang="ts">
    const showModal = ref(false);
    const modalLevel = ref(1);
    const levelPath = ref('')
</script>

<template>
    <div>
        <LevelModal v-show="showModal" :path="levelPath" :level="modalLevel" @close="showModal = false">
        </LevelModal>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 justify-items-center gap-y-8 p-8">
            <LevelCard :is-disabled="false" @click="showModal=true; modalLevel=1; levelPath='/levels/level-one'">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 1</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">s, a, t, i, p, n</p></template>
            </LevelCard>
            <LevelCard :is-disabled="false" @click="showModal=true; modalLevel=2; levelPath='/levels/level-two'">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 2</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">ck, e, h, r, m, d</p></template>
            </LevelCard>
            <LevelCard :is-disabled="true">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 3</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">g, o, u, l, f, b</p></template>
            </LevelCard>
            <LevelCard :is-disabled="true">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 4</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">ai, j, oa, ie, ee, or</p></template>
            </LevelCard>
            <LevelCard :is-disabled="true">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 5</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">z, w, ng, v, oo</p></template>
            </LevelCard>
            <LevelCard :is-disabled="true">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 6</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">y, x, ch, sh, th</p></template>
            </LevelCard>
            <LevelCard :is-disabled="true">
                <template #level-text><p class="lg:text-4xl md:text-4xl">Level 7</p></template>
                <template #sub-text><p class="lg:text-2xl md:text-3xl">qu, ou, oi, ue, er, ar</p></template>
            </LevelCard>
        </div>
    </div>
</template>

<style scoped>

</style>