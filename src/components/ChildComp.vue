<script setup>

const props = defineProps({
    msg: String
})

const emit = defineEmits(
    ['response']
)

emit('response', 'hello from child')

</script>

<template>
    <h2>{{ msg || 'No props passed yet'}}</h2>
    <slot>Fallback content</slot>
</template>