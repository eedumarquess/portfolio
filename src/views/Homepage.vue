<script setup lang="ts">
  import Menu from '@/components/menu/Menu.vue';
</script>

<template>
  <Menu />

  <div class="homepage-text">
    <h1 class="homepage-title">
      Hello, I’m Eduardo, <br/>
      But You Can Call Me Edu
    </h1>
    <p class="homepage-paragraph">
      I’m a fullstack develop & UX/UI Designer
    </p>
    <div id="nav">
      <router-link to="/about-me">
        Who Am I
      </router-link>
      <router-link to="/projects">
        Projects
      </router-link>
      <router-link to="/contact-me">
        Contact Me
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>  
  @font-face {
    font-family: "LeagueSpartan";
    src: url('../assets/fonts/LeagueSpartan.ttf');
  }

  .homepage-text {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .homepage-title {
    text-align: center;
    color: #1B98E0;
    font-size: 48px;
    font-weight: 500;
    padding: 5px;
    line-height: 45px;
  }

  .homepage-paragraph {
    font-weight: 300;
    font-size: 24px;
    padding: 5px 5px 15px 5px;
  }

  #nav > a {
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    padding: 5px;
    font-size: 20px;
  }

  #nav > a::before {
    content: "\2192";
  }

</style>