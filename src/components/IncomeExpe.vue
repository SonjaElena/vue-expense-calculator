<template>
  <div class="inc-exp-container">
    <div class="itemdiv">
      <h4>Income</h4>
      <p id="money-plus" class="money plus">{{ props.income }} €</p>
    </div>
    <div class="itemdiv">
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">{{ props.expenses }} €</p>
    </div>
  </div>
</template>

<style scoped>
.inc-exp-itemdiv {
  background-color: rgb(177, 25, 25);
}
</style>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>
