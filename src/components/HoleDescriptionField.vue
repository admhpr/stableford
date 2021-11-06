<script setup lang="ts">
import { computed, ref, toRefs } from "@vue/reactivity";
import {PotentialHolePars, PotentialStrokeIndexes} from "../logic/types";
const props = defineProps({
    holeNumber: Number
})


const { holeNumber } = toRefs(props);

const par: PotentialHolePars = ref(3)
const strokeIndex: PotentialStrokeIndexes = ref(1)

const fieldLabel = computed(() => `Description for hole ${holeNumber.value}`)
</script>
<template>
    <o-field :label="fieldLabel">
        <o-input type="text" v-model="par"> </o-input>
        <o-input type="text" v-model="strokeIndex"> </o-input>
    </o-field>
</template>

<style scoped>

</style>