<script setup lang="ts">

</script>

<template>
  <div class="identification-body">
    <div class="identification-card">
      <p class="card-title">
        Hello, my name is Eduardo, a 23-year-old residing in Sao Paulo, Brazil.
      </p>
      
      <p class="card-paragraph">
        My first experience with programming dates back to when I was 16 years old. During my technical course in electronics/electricity, I had to learn programming in c/c++ for an Arduino Uno. I quickly realized that I had a natural inclination towards programming logic, which led me to pursue a Bachelor's degree in Computer Science.
      </p>
      
      <p class="card-paragraph">
        After completing my degree in 2022, I have acquired extensive knowledge in all areas of IT, with a particular interest and proficiency in web programming. Over the past two years, I have honed my skills in web design, and I thoroughly enjoy working with JavaScript and its various frameworks. 
      </p>
      
      <p class="card-paragraph">
        As for my personal interests, I live with my partner and two cats, Teddy and Xayah. In my free time, I enjoy playing video games, as well as keeping up with the latest trends in pop culture, including movies and TV series.
      </p>
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: "LeagueSpartan";
    src: url('../assets/fonts/LeagueSpartan.ttf');
  }

  .identification-body {
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

  .identification-card {
    width: 550px;
    padding: 60px 10px 60px 10px;
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(40px);
    border-radius: 25px;
    border: 1px solid black;
  }

  .card-title {
    font-size: 36px !important;
    font-weight: 500;
    color: #1B98E0;
  }

  .card-title, .card-paragraph {
    text-align: justify;
    font-size: 24px;
    padding: 10px;
  }

</style>