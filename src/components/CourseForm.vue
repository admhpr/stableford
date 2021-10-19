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
  <button type="button" @click="onButtonClick">count is: {{ count }}</button>
</template>

<style scoped></style>
