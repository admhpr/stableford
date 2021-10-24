<script setup lang="ts">
import { ref } from "vue"

defineProps({
  msg: String,
})

const activeTab = ref(0)
const count = ref(0)
const isNineHoleCourse = ref(false)

function onButtonClick() {
  count.value += 1
}
</script>

<template>
  <section></section>
  <o-tabs v-model="activeTab" type="boxed" position="centered">
    <o-tab-item label="Course" icon="images">
      <form class="p-4 shadow-md rounded-md text-left" style="max-width: 400px">
        <o-switch v-model="isNineHoleCourse">9 Hole Course</o-switch>
        <o-field label="Course Name">
          <o-input value=""></o-input>
        </o-field>

        <o-field label="Email" variant="danger" message="This email is invalid">
          <o-input type="email" value="john@" maxlength="30"> </o-input>
        </o-field>

        <o-field
          label="Username"
          variant="success"
          message="This username is available"
        >
          <o-input value="johnsilver" maxlength="30"></o-input>
        </o-field>

        <o-field label="Password" variant="warning">
          <o-input value="123" type="password" maxlength="30"></o-input>
        </o-field>

        <o-field label="Subject">
          <o-select placeholder="Select a subject">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </o-select>
        </o-field>

        <o-field
          label="Wrong subject"
          variant="danger"
          message="Selected subject is wrong"
        >
          <o-select placeholder="Select a subject">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </o-select>
        </o-field>
      </form>
    </o-tab-item>
    <o-tab-item label="Score" icon="music"> hello </o-tab-item>
  </o-tabs>
</template>

<style scoped></style>
