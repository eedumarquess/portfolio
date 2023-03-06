<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Menu from './components/menu/Menu.vue';
</script>

<template>
  <Menu />
</template>

<style>
  @font-face {
    font-family: "LeagueSpartan";
    src: url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500&display=swap');;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
</style>