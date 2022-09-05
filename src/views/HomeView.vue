<script setup>
  import { ref } from 'vue'
  import ChildComp from "@/components/ChildComp.vue";

const greeting = ref('Hello from parent')
const childMsg = ref('No child msg yet')

</script>

<template>
  <main>
    <p class="first_child">
      <h3>Fisrt Child (without slot)</h3>
      <ChildComp @response="(msg) => childMsg = msg" :msg="greeting" />

    </p>
    <p class="second_child">
      <h3>Second Child (with slot)</h3>
      <ChildComp>
        Passing a slot with information --> {{greeting}}
      </ChildComp>
      
    </p>
      <p>{{ childMsg }}</p>
  </main>
</template>

<style>
 .first_child {
  background-color: rgb(220, 221, 166);
 }
 .second_child {
  background-color: rgb(167, 204, 149);
 }
</style>