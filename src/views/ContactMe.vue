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
        it will be a pleasure to answer you,
        feel free to call me on my social networks below!
      </p>

      <div class="icons-social">
        <a href="">
          <img src="../assets/icons/linkedin.png" />

          <span>Linkedin</span>
        </a>
        
        <a href="">
          <img src="../assets/icons/github.png" />

          <span>Github</span>
        </a>
        
        <a href="">
          <img src="../assets/icons/instagram.png" />

          <span>Instagram</span>
        </a>
        
        <a href="">
          <img src="../assets/icons/twitter.png" />

          <span>Twitter</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  .contact-body {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact-social {
    margin: 16px;
    padding: 16px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
    backdrop-filter: blur(40px);
    border-radius: 25px;
    box-shadow: 0px 0px 0px 2px rgba(27, 152, 224, 0.25);
  }

  .contact-social > h1 {
    font-size: 24px;
    margin: 4px 0px;
  }

  .contact-social > p {
    text-align: justify;
    margin: 4px 0px;
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
    text-decoration: none;
    font-size: 16px;
    margin: 4px 0px;
  }

  .icons-social > a > span {
    margin: 4px 0px 0px 8px;
  }

  a:visited { 
    color: #fff;
  }

  .icons-social > a > img {
    aspect-ratio: 1.75/2;
    object-fit: contain;
    width: 24px;
  }

  @media screen and (min-width: 760px) {
    .contact-social {
      width: 50%;
      padding: 36px;
    }
    
    .contact-social > h1 {
      font-size: 36px;
      margin: 8px 0px;
    }

    .contact-social > p {
      font-size: 24px;
      margin: 4px 0px;
    }

    .icons-social > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 24px;
      margin: 4px 0px;
    }

    .icons-social > a > span {
      margin: 4px 0px 0px 8px;
    }

    .icons-social > a > img {
      aspect-ratio: 1.75/2;
      object-fit: contain;
      width: 36px;
    }
  }
</style>