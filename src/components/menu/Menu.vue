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
    <img 
      v-if="isMenuActive"
      class="icon-menu" 
      src="../../assets/images/xmark-solid.svg" 
      @click="handleMenu"
    />
    <img 
      v-else="isMenuActive"
      class="icon-menu" 
      src="../../assets/images/bars-solid.svg" 
      @click="handleMenu"
    />

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
          <img src="../../assets/icons/linkedin.png" />
        </a>
        
        <a href="">
          <img src="../../assets/icons/github.png" />
        </a>
        
        <a href="">
          <img src="../../assets/icons/instagram.png" />
        </a>
        
        <a href="">
          <img src="../../assets/icons/twitter.png" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style>
  .menubar-sidebar {
    position: fixed;
  }

  .icon-menu {
    margin: 30px;
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
    padding: 5px;
    margin: 5px 30px;
    font-size: 54px;
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