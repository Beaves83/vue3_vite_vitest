<script setup>
    import { ref } from 'vue'

    const awesome = ref(true);

</script>
<template>
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
</template>

<style>
    .button:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>