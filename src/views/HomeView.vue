<script>
  import { increment, decrement } from "../components/tests/counter"

  export default {
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count = increment(this.count)
      },

      decrement() {
        this.count = decrement(this.count)
      }
    }
  }
</script>

<template>
  <div class="counter-container">
    <div class="text-container">
      <h1>Count:</h1>
      <h1 class="count">{{ count }}</h1>
    </div>
    <div class="btn-container">
      <button class="decrement" @click="decrement(count)">Decrement</button>
      <button class="increment" @click="increment(count)">Increment</button>
    </div>
  </div>
</template>

<style>
  .counter-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  .counter-container h1 {
    margin-bottom: 10px;
  }

  .btn-container :first-child {
    margin-right: 10px;
  }

  .btn-container button {
    background-color: #40B280;
    width: 75px;
    text-align: center;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    text-decoration: none;
    color: black;
    border: none;
  }

  .btn-container button:hover {
    background-color: #126440;
    cursor: pointer;
  }
</style>