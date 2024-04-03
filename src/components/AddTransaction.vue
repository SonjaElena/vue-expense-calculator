<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label form="amount">
        Amount <br />(negative - expense, positive - income)
      </label>
      <input type="text" id="amount" v-model="amount" placeholder="input" />
    </div>
    <button @click="deleteTransaction(transaction.id)" class="btn">
      Add transaction
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useToast } from "vue-toastification";

export default {
  setup(_, { emit }) {
    const text = ref("");
    const amount = ref("");
    const toast = useToast();

    const onSubmit = () => {
      if (!text.value || !amount.value) {
        toast.error("Entry is missing");
        return;
      }

      const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value),
      };

      emit("transactionSubmitted", transactionData); // Emitting the event

      text.value = "";
      amount.value = "";
    };

    return {
      text,
      amount,
      onSubmit,
    };
  },
};

const deleteTransaction = (id) => {};
</script>
