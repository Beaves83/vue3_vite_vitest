<script setup>
import { ref } from "vue";
import ChildComp from "@/components/ChildComp.vue";

const greeting = ref("Hello from parent");
const childMsg = ref("No child msg yet");
</script>

<template>
  <main>
    <div class="first_child">
      <h3>First Child (without slot)</h3>
      <ChildComp :msg="greeting" @response="(msg) => (childMsg = msg)" />
    </div>
    <div class="second_child">
      <h3>Second Child (with slot)</h3>
      <ChildComp>
        Passing a slot with information --> {{ greeting }}
      </ChildComp>
    </div>
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
