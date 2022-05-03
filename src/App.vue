<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="app-header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>Unit Tests Practice</h1>
    <nav>
      <RouterLink class="nav-btn" active-class="nav-active" to="/">Home</RouterLink>
      <RouterLink class="nav-btn" active-class="nav-active" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
  @import '@/assets/base.css';

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  .app-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    text-decoration: none;
    margin-bottom: 20px;
  }

  nav :first-child {
    margin-right: 10px;
  }

  .nav-btn {
    background-color: #40B280;
    width: 75px;
    text-align: center;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    text-decoration: none;
    color: black;
  }

  .nav-btn:hover {
    background-color: #126440;
    cursor: pointer;
  }

  .nav-active {
    background-color: #126440;
  }

  h1 {
    font-weight: 700;
    font-size: 30px;
  }
</style>
