<script setup lang="ts">
    import VueMarkdown from 'vue-markdown-render';
    const showModal = ref(false);
</script>

<template>
    <h1 class="text-4xl text-center">Levels</h1>
    <LevelModal v-if="showModal" path="/levels/level_one" @close="showModal = false">
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
        <LevelCard path="/levels/level_two">
            <template #level-text>レベル２</template>
            <template #sub-text>c, k, e, h, r, m, d</template>
        </LevelCard>
        <LevelCard path="/levels/level_three">
            <template #level-text>レベル３</template>
            <template #sub-text>g, o, u, l, f, b</template>
        </LevelCard>
        <LevelCard path="/levels/level_four">
            <template #level-text>レベル４</template>
            <template #sub-text>ai, j, oa, ie, ee, or</template>
        </LevelCard>
        <LevelCard path="/levels/level_five">
            <template #level-text>レベル５</template>
            <template #sub-text>z, w, ng, v, oo</template>
        </LevelCard>
        <LevelCard path="/levels/level_six">
            <template #level-text>レベル６</template>
            <template #sub-text>y, x, ch, sh, th</template>
        </LevelCard>
        <LevelCard path="/levels/level_seven">
            <template #level-text>レベル７</template>
            <template #sub-text>qu, ou, oi, ue, er, ar</template>
        </LevelCard>
    </div>
</template>

<style scoped>

</style>