<script setup lang="ts">
import { computed, toRefs } from "@vue/reactivity";

const props = defineProps({
    holeNumber: Number
})


const { holeNumber } = toRefs(props);

const fieldLabel = computed(() => `Description for hole ${holeNumber.value}`)
</script>
<template>
    <o-field :label="fieldLabel">
        <o-input type="email" value="john@" maxlength="30"> </o-input>
    </o-field>
</template>

<style scoped>

</style>