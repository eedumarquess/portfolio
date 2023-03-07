<script setup lang="ts">

</script>

<template>
  <div class="homepage-text">
    <h1>
      Hello, I’m Eduardo, <br/>
      But You Can Call Me Edu
    </h1>
    <p>
      I’m a fullstack develop & UX/UI Designer
    </p>
    <div id="nav">
      <router-link to="/about-me">Who Am I</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact-me">Contact Me</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>  
  @font-face {
    font-family: "LeagueSpartan";
    src: url('~@/assets/fonts/LeagueSpartan.ttf');
  }

  .homepage-text {
    font-family: "LeagueSpartan";
    background-color: #222831;
    color: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    color: #1B98E0;
    font-size: 32px;
    font-weight: 500;
  }
</style>