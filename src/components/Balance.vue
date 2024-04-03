<template>
  <div class="designbox">
    <h4>Your Balance</h4>
    <h1 id="balance">{{ total }} €</h1>
  </div>
</template>

<style scoped>
.designbox {
  border: solid 1px black;
  padding: 0 10rem;
}
</style>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});

const total = ref(props.total);
</script>
