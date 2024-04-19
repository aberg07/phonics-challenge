<script setup lang="ts">
    const showModal = ref(false);
</script>

<template>
    <div>
        <h1 class="text-4xl text-center">Levels</h1>
        <LevelModal v-show="showModal" path="/levels/level-one" @close="showModal = false">
            <template #body>
                Test
            </template>
            <template #button-text>
                がんばろう！
            </template>
        </LevelModal>
        <div class="grid grid-cols-4 justify-items-center gap-y-8 p-8">
            <LevelCard @click="showModal=true">
                <template #level-text>レベル１</template>
                <template #sub-text>s, a, t, i, p, n</template>
            </LevelCard>
            <LevelCard path="/levels/level-two">
                <template #level-text>レベル２</template>
                <template #sub-text>c, k, e, h, r, m, d</template>
            </LevelCard>
            <LevelCard path="/levels/level-three">
                <template #level-text>レベル３</template>
                <template #sub-text>g, o, u, l, f, b</template>
            </LevelCard>
            <LevelCard path="/levels/level-four">
                <template #level-text>レベル４</template>
                <template #sub-text>ai, j, oa, ie, ee, or</template>
            </LevelCard>
            <LevelCard path="/levels/level-five">
                <template #level-text>レベル５</template>
                <template #sub-text>z, w, ng, v, oo</template>
            </LevelCard>
            <LevelCard path="/levels/level-six">
                <template #level-text>レベル６</template>
                <template #sub-text>y, x, ch, sh, th</template>
            </LevelCard>
            <LevelCard path="/levels/level-seven">
                <template #level-text>レベル７</template>
                <template #sub-text>qu, ou, oi, ue, er, ar</template>
            </LevelCard>
        </div>
    </div>
</template>

<style scoped>

</style>