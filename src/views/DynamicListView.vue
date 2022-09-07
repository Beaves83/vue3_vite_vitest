<script setup>
import { ref, computed } from 'vue';

  let id = 0;

  const hideCompleted = ref(false);
  const newElement = ref('');
  const newHighPriority = ref(false);
  const elements = ref([
    { id: id++, text: 'Learn HTML', highPriority: false, done: true },
    { id: id++, text: 'Learn CSS', highPriority: false, done: false },
    { id: id++, text: 'Learn Vue', highPriority: true, done: false }
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
      highPriority: newHighPriority.value,
      done: false
    });
    newElement.value = ''
    newHighPriority.value = false
  };

  function removeElement(element) {
    elements.value = elements.value.filter(x => x != element);
  }

</script>

<template>
  <form @submit.prevent="addElement">
    <input v-model="newElement">
    <label>
      <input type="checkbox" v-model="newHighPriority" >
      High Priority
    </label>
    <button>Add Element</button>
  </form>
  <ul>
    <li 
      v-for="element in filteredElements" 
      :key="element.id"
      @click="element.done = !element.done"
    >
      <span 
        class="element__list"
        :class="[{ done: element.done}, { highPriority: element.highPriority}]"
      >
        {{ element.text }}
      </span>
      <button @click="removeElement(element)">Delete</button>
    </li>
  </ul>
  <div class="button__hide">
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed'}}
    </button>
  </div>
</template>

<style>
  ul {
    list-style-type: none;
  }
  li {
    padding: 5px 0;
    cursor: pointer;
  }
  form {
    display: flex;
    justify-content: space-evenly;
}
  .done {
    text-decoration: line-through;
    color: gray;
  }
  .highPriority{
    color: red;
  }
  .element__list{
    padding-right: 20px;
    font-size: 20px;
  }
  .button__hide{
    text-align: center;
    margin-top: 20px;
  }
</style>