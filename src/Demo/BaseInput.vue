<template>
    <div>
        Base Input
        <input @input="handleInput" />
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['update'])

const handleInput = (event) => {
    emit('update', event.target.value)
}
</script>
