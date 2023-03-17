<script lang="ts">

export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    handleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
  }
}
</script>

<template>
  <div class="menubar-sidebar">
    <div 
      class="icon-header"
      v-bind:style= "[isMenuActive ? {backgroundColor: '#222831' } : {backgroundColor: 'transparent' }]"
    >
      <img 
        v-if="isMenuActive"
        class="icon-menu" 
        src="/src/assets/images/xmark-solid.svg" 
        @click="handleMenu"
      />
      <img 
        v-else="isMenuActive"
        class="icon-menu" 
        src="/src/assets/images/bars-solid.svg" 
        @click="handleMenu"
      />
    </div>
    
    <nav
      class="menubar-nav" 
      :style="{
        display: isMenuActive ? 'flex' : 'none',
      }"
    >
      <div class="menubar-links">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about-me">
          About me
        </router-link>
        <router-link to="/projects">
          Projects
        </router-link>
        <router-link to="/contact-me">
          Contact
        </router-link>
      </div>
      
      <div class="menubar-icons">
        <a href="">
          <img src="/src/assets/icons/linkedin.png" />
        </a>
        
        <a href="">
          <img src="/src/assets/icons/github.png" />
        </a>
        
        <a href="">
          <img src="/src/assets/icons/instagram.png" />
        </a>
        
        <a href="">
          <img src="/src/assets/icons/twitter.png" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style>
  .menubar-sidebar {
    z-index: 9999;
    position: fixed;
  }

  .icon-header {
    width: 100vw;
  }

  .icon-menu {
    margin: 32px;
    filter: invert(95%) sepia(100%) saturate(14%) hue-rotate(213deg) brightness(104%) contrast(104%);
    width: 40px;
    aspect-ratio: 1;
    object-fit: contain;
  }

  .menubar-nav {
    background-color: #222831;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  }

  .menubar-links {
    display: flex;
    flex-direction: column;
  }

  .menubar-links > a {
    text-decoration: none;
    padding: 5px;
    margin: 5px 32px;
    font-size: 54px;
    text-decoration: none;
  }

  .menubar-icons {
    position: fixed;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    bottom: 0;
  }

  .menubar-icons > a > img {
    margin: 10px 7.5px;
    width: 25px;
  }
</style>