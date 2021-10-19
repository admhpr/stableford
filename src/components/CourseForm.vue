<script setup lang="ts">
import { ref } from "vue"

defineProps({
  msg: String,
})

const count = ref(0)

function onButtonClick() {
  count.value += 1
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <o-button @click="onButtonClick">Click Me</o-button>
  <span>count is: {{ count }}</span>
</template>

<style scoped></style>
