<script setup>
import { computed } from "@vue/reactivity";

defineProps({
    holeNumber: Number
})
const fieldLabel = computed(() => `Description for hole ${holeNumber}`)
</script>
<template>
    <o-field :label="fieldLabel">
        <o-input type="email" value="john@" maxlength="30"> </o-input>
    </o-field>
</template>

<style scoped>

</style>