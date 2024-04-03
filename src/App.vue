<template>
  <HeaDer />
  <div class="container">
    <BalanCe :total="+total" />
    <InEx :income="+income" :expenses="+expenses" />
    <TL :transactions="transactions" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmited" />
  </div>
</template>

<script setup>
import HeaDer from "./components/HeaDer.vue";
import BalanCe from "./components/BalanCe.vue";
import InEx from "./components/IncomeExpe.vue";
import TL from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { useToast } from "vue-toastification";

import { ref, computed } from "vue";

const transactions = ref([
  { id: 1, text: "Flower", amount: -25 },
  { id: 2, text: "Running", amount: 20 },
]);

const toast = useToast(); // initialize useToast here

const total = computed(() => {
  return (parseFloat(income.value) + parseFloat(expenses.value)).toFixed(2);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const handleTransactionSubmited = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  toast.success("Transaction added"); // use toast here
};

const generateUniqueId = () => {
  return Math.floor(Math.random());
};
</script>
