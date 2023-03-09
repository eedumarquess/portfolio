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
        → Who Am I
      </router-link>
      <router-link to="/projects">
        → Projects
      </router-link>
      <router-link to="/contact-me">
        → Contact Me
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<!-- color: #1B98E0; -->

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
    margin: 4px 16px;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color: #1B98E0;
  }

  .homepage-paragraph {
    margin: 4px 16px;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
  }

  #nav {
    display: none;
  }

  @media screen and (min-width: 380px) {
    #nav {
      display: block;
      margin: 4px;
    }

    #nav > a {
      padding: 4px;
      margin: 4px;
      font-size: 20px;
    }

    #nav > a:hover {
      color: #1B98E0;
    }
  }

</style>