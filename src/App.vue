<template>
  <HeaDer />
  <div class="container">
    <BalanCe />
    <InEx />
    <TL />
    <AddTransaction />
  </div>
</template>

<script>
import HeaDer from "./components/HeaDer.vue";
import BalanCe from "./components/BalanCe.vue";
import InEx from "./components/IncomeExpe.vue";
import TL from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

export default {
  components: {
    HeaDer,
    BalanCe,
    InEx,
    TL,
    AddTransaction,
  },
};
</script>
