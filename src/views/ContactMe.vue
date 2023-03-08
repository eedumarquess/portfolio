<script setup lang="ts">
  import Menu from '@/components/menu/Menu.vue';
</script>

<template>
  <Menu />
  
  <div class="contact-body">
    <div class="contact-social">
      <h1>
        Let’s talk,
        get in touch
        👋 
      </h1>

      <p>
        it will be a pleasure to answer you, <br/>
        feel free to call me on my social networks below! 😉
      </p>

      <div class="icons-social">
        <a href="">
          <img src="../assets/icons/linkedin.png" />

          Linkedin
        </a>
        
        <a href="">
          <img src="../assets/icons/github.png" />

          Github
        </a>
        
        <a href="">
          <img src="../assets/icons/instagram.png" />

          Instagram
        </a>
        
        <a href="">
          <img src="../assets/icons/twitter.png" />

          Twitter
        </a>
      </div>
    </div>
  </div>
</template>

<style>
    .contact-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .contact-social {
      background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
      backdrop-filter: blur(40px);
      border-radius: 25px;
      box-shadow: 0px 0px 0px 2px rgba(27, 152, 224, 0.25);
      padding: 20px;
    }

    .contact-social > h1 {
      font-size: 32px;
      margin-bottom: 7.5px;
    }

    .contact-social > p {
      font-size: 20px;
      margin: 7.5px 0px;
    }

    .icons-social {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
    }

    .icons-social > a {
      display: flex;
      align-items: center;
      font-size: 12.5px;
    }

    .icons-social > a > img {
      margin: 5px 5px 5px 0px;
      width: 25px;
    }

    a:visited {
      color: #fff;
    }
</style>