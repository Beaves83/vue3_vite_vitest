<script setup>
import { ref, reactive } from "vue";

const isActive = ref(true);
const hasError = ref(false);

const activeClass = ref("active");
const errorClass = ref("text-danger");
const fontSize = ref(30);

const classObject = reactive({
  active: isActive.value && !hasError.value,
  "text-danger": hasError.value,
});

const styleObject = reactive({
  fontStyle: "italic",
  padding: "10px 0",
});
</script>
<template>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Text with static and dynamic class
  </div>
  <div :class="classObject">Text with class from the object</div>
  <div :class="[activeClass, errorClass]" :style="styleObject">
    Text with class with destructuring
  </div>
  <div
    :class="[isActive ? activeClass : '', { errorClass: hasError }]"
    :style="[{ fontSize: fontSize + 'px' }, styleObject]"
  >
    Text with class with destructuring and dynamic styles
  </div>
</template>
<style>
.active {
  color: blue;
}
.text-danger {
  color: red;
  font-weight: bold;
}
</style>
