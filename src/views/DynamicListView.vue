<script setup>
import { ref, computed } from 'vue';

  let id = 0;

  const hideCompleted = ref(false);
  const newElement = ref('');
  const newHighPriority = ref(false);
  const editing = ref(false);

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
  const doEdit = (e) => {
    editing.value = e
    newElement.value = ''
  }
</script>

<template>
  <div class="header">
    <h1>This is a dynamic list</h1>
    <button v-if="editing" class="" @click="doEdit(false)">
        Cancel
    </button>
    <button v-else class="" @click="doEdit(true)">
      Edit mode
</button>
  </div>
  <form 
  v-if="editing"
  @submit.prevent="addElement">
    <input v-model="newElement" placeholder="Add new element to the list...">
    <label>
      <input type="checkbox" v-model="newHighPriority">
      High Priority
    </label>
    <button>Add Element</button>
  </form>
  <ul>
    <li 
      v-for="element in filteredElements" 
      :key="element.id"
      @click="element.done = !element.done && editing"
    >
      <span 
        class="element__list"
        :class="[{ done: element.done}, { highPriority: element.highPriority}]"
      >
        {{ element.text }}
      </span>
      <button @click="removeElement(element)" v-if="editing">Delete</button>
    </li>
  </ul>
  <!-- <ul>
    <li 
      v-for="{id, text, highPriority, done} in filteredElements" 
      :key="id"
      @click="done = !done"
    >
      <span 
        class="element__list"
        :class="[{ done: done}, { highPriority: highPriority}]"
      >
        {{ text }}
      </span>
      <button @click="removeElement({id: id, text: text, highPriority: highPriority, done: done})" v-if="editing">Delete</button>
    </li>
  </ul> -->
  <p v-if="!filteredElements.length">
    Nothing to see here
  </p>
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
  .header {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    }

    .header button {
        padding: 15px 0;
        background-color: antiquewhite;
      }
</style>