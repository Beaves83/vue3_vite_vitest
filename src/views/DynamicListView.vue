<script setup>
import { ref, computed } from 'vue';

  let id = 0;

  const hideCompleted = ref(false);
  const newElement = ref('');
  const elements = ref([
    { id: id++, text: 'Learn HTML', done: true },
    { id: id++, text: 'Learn CSS', done: true },
    { id: id++, text: 'Learn Vue', done: false }
  ])

  const filteredElements = computed( () => {
    return (hideCompleted.value) 
    ? elements.value.filter(x => !x.done)
    : elements.value; 
  }); 

  function addElement() {
    elements.value.push({
      id: id++,
      text: newElement.value,
      donde: false
    });
    newElement.value = ''
  };

  function removeElement(element) {
    elements.value = elements.value.filter(x => x != element);
  }

</script>

<template>
  <form @submit.prevent="addElement">
    <input v-model="newElement">
    <button>Add Element</button>
  </form>
  <ul>
    <li v-for="element in filteredElements" :key="element.id">
      <input type="checkbox" v-model="element.done">
      <span :class="{ done: element.done}">
        {{ element.text }}
      </span>
      <button @click="removeElement(element)">Delete</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed'}}
  </button>
</template>

<style>
  .title {
    color: green;
  }
  .done {
    text-decoration: line-through;
  }
</style>