<script setup lang="ts">
  import Menu from '@/components/menu/Menu.vue';
</script>

<template>
  <Menu />

  <div class="identification-body">
    <div class="identification-card">
      <p class="card-title">
        Hello, my name is Eduardo, a 23-year-old residing in Sao Paulo, Brazil.
      </p>
      
      <p class="card-paragraph">
        My first experience with programming dates back to when I was 16 years old. During my technical course in electronics/electricity, I had to learn programming in c/c++ for an Arduino Uno. I quickly realized that I had a natural inclination towards programming logic, which led me to pursue a Bachelor's degree in Computer Science.
      </p>
      
      <p class="card-paragraph">
        After completing my degree in 2022, I have acquired extensive knowledge in all areas of IT, with a particular interest and proficiency in web programming. Over the past two years, I have honed my skills in web design, and I thoroughly enjoy working with Javascript and its various frameworks. 
      </p>

      <p class="card-paragraph">
        As for my personal interests, I live with my partner and two cats, Teddy and Xayah. In my free time, I enjoy playing video games such as League of Legends, as well as keeping up with the latest trends in pop culture, including movies and TV series.
      </p>
    </div>
  </div>
</template>

<style>
  .identification-body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .identification-card {
    margin: 32px;
    text-align: justify;
  }

  .card-title {
    font-size: 24px;
    margin: 8px 0px;
  }

  .card-paragraph {
    font-size: 16px;
    margin: 8px 0px;
  }

  .card-paragraph:last-of-type {
    display: none;
  }

  @media screen and (min-width: 384px) {
    .identification-card {
      padding: 32px;
      background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
      backdrop-filter: blur(40px);
      border-radius: 25px;
      box-shadow: 0px 0px 0px 2px rgba(27, 152, 224, 0.15)
    }
  }

  @media screen and (min-width: 780px) {
    .identification-card {
      width: 50%;
    }

    .card-title {
      font-size: 36px;
      margin: 8px 0px;
    }

    .card-paragraph {
      font-size: 20px;
      margin: 8px 0px;
    }

    .card-paragraph:last-of-type {
      display: block;
    }
  }


</style>