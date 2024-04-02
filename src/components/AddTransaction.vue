<template>
  <h3>Add new transaction</h3>
  <form id="form">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label form="amount">
        Amount <br />(negative - expense, positive - income)
      </label>
      <input type="number" id="amount" placeholder="input" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>
