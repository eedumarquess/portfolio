<script setup lang="ts">
  import Menu from '@/components/menu/Menu.vue';
  import ScrollDown from '@/components/scroll-down/ScrollDown.vue';
</script>

<template>
  <Menu />
  <div class="homepage-body">
    <div class="homepage-image">
      <div class="profile-image">
        
      </div>
    </div>

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

    <div>
      <ScrollDown />
    </div>
  </div>

</template>

<style>  
  @font-face {
    font-family: "LeagueSpartan";
    src: url(/src/assets/fonts/LeagueSpartan.ttf);
  }

  .homepage-body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .homepage-image {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-image {
    background: white;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .homepage-text {
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .homepage-title {
    margin: 8px;
    font-size: 40px;
    font-weight: 500;
    color: #1B98E0;
  }

  .homepage-paragraph {
    margin: 16px;
    font-size: 24px;
    font-weight: 300;
  }

  #nav {
    display: none;
    justify-content: center;
    margin: 16px;
  }

  #nav router-link {
    margin: 8px 0px;
    font-size: 18px;
  }

  .scrolldown-icon {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .homepage-body {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }

    .homepage-image {
      height: 100vh;
      width: 50%;
    }

    .homepage-text {
      height: 100vh;
      width: 50%;
    }

    .scrolldown-icon {
      position: fixed;
      bottom: 0;
    }
    
    #nav {
      display: flex;
    }

    .profile-image {
      background: white;
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  }

  

</style>