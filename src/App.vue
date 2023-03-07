<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Menu from './components/menu/Menu.vue';
</script>

<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about-me">About-me</router-link>
  </div>
  <router-view/>
</template>

<style>
  @font-face {
    font-family: "LeagueSpartan";
    src: local('LeagueSpartan'), url(./fonts/LeagueSpartan.ttf) format("truetype");
  }

  .nav {
    display: none;
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