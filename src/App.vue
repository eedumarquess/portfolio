<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import AboutMe from './views/AboutMe.vue';
  import Projects from './views/Projects.vue';
  import ContactMe from './views/ContactMe.vue'
</script>

<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about-me">About-me</router-link>
  </div>
  <router-view/>

  <AboutMe />
  <Projects />
  <ContactMe />

</template>

<style>
  @font-face {
    font-family: "LeagueSpartan";
    src: local('LeagueSpartan'), url(/src/assets/fonts/LeagueSpartan.ttf) format("truetype");
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

  body {
    font-family: "LeagueSpartan";
    background-color: #222831;
    animation: pulsate 20s ease-out infinite;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @keyframes pulsate {
    0% {
      background-color: #222831;
    }
    50% {
      background-color: #324865;
    }
    100% {
      background-color: #222831;
    }
  }
</style>