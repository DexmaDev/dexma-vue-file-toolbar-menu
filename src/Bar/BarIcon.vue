<template>
    <div v-if="icon">
        <component v-if="typeof icon == 'object'" class="icon" :is="icon"></component>
        <span v-else class="material-icons icon" :style="{ color: color }">{{ icon }}</span>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: false,
    },
})
</script>