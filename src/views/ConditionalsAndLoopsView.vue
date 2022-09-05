<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1,2,3])
</script>

<template>
<button @click="show = !show" >Toggle list</button>
<button @click="list.push(list.length + 1)">Push number</button>
<button @click="list.pop()">Pop number</button>
<button @click="list.reverse()">Reverse List</button>

<ul v-if="show && list.length">
  <li v-for="item of list">
    {{item}}
  </li>
</ul>
<p v-else-if="list.length">List is not empty, but hidden</p>
<p v-else>List if empty</p>

</template>

<style>

</style>