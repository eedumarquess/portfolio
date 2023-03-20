<script lang="ts">
  export default {
    
  }
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

  <div class="timeline">
    <div class="outer">
      <div class="card">
        <div class="info">
          <h3 class="title">Where it all started...</h3>
          <p>
            My first experience with programming dates back to when I was 16 years old. During my technical course in electronics/electricity, I had to learn programming in c/c++ for an Arduino Uno. I quickly realized that I had a natural inclination towards programming logic, which led me to pursue a Bachelor's degree in Computer Science.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="info">
          <h3 class="title">Where I am currently...</h3>
          <p>
            After completing my degree in 2022, I have acquired extensive knowledge in all areas of IT, with a particular interest and proficiency in web programming. Over the past two years, I have honed my skills in web design, and I thoroughly enjoy working with Javascript and its various frameworks.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="info center">
          <h3 class="title center">My programming skills</h3>
          <p class="icons-language">
            <i class="devicon-typescript-plain"></i>
            <i class="devicon-python-plain"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-csharp-plain"></i>
          </p>

          <p class="icons-language">
            <i class="devicon-css3-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
            <i class="devicon-tailwindcss-plain"></i>
          </p>

          <p class="icons-language">
            <i class="devicon-github-original"></i>
            <i class="devicon-amazonwebservices-original"></i>
            <i class="devicon-docker-plain"></i>
            <i class="devicon-linux-plain"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .timeline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    padding: 20px;
  }

  .card {
    position: relative;
    max-width: 600px;
  }

  .card:nth-child(odd) {
    padding: 30px 0 30px 30px;
  }
  .card:nth-child(even) {
    padding: 30px 30px 30px 0;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 50%;
    border: solid #1B98E0;
  }

  .card:nth-child(odd)::before {
    left: 0px;
    top: -4.5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
  }

  .card:nth-child(even)::before {
    right: 0;
    top: 0;
    bottom: 0;
    border-width: 5px 5px 5px 0;
    border-radius: 0 50px 50px 0;
  }

  .card:first-child::before {
    border-top: 0;
    border-top-left-radius: 0;
  }

  .card:last-child:nth-child(odd)::before {
    border-bottom: 0;
    border-bottom-left-radius: 0;
  }
  .card:last-child:nth-child(even)::before {
    border-bottom: 0;
    border-bottom-right-radius: 0;
  }

  .info {
    box-shadow: 0px 0px 0px 2px rgba(27, 152, 224, 0.15);
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
    backdrop-filter: blur(40px);
    text-align: justify;
    color: white;
    border-radius: 10px;
    padding: 16px;
    line-height: 18px;
  }

  .title {
    color: #1B98E0;
    position: relative;
    font-size: 20px;
    font-weight: 600;
    margin: 8px 0px;
  }

  .title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 999px;
    border: 3px solid #1B98E0;
  }

  .card:nth-child(odd) > .info > .title::before {
    left: -50px;
  }

  .card:nth-child(even) > .info > .title::before {
    right: -50px;
  }

  .icons-language {
    display: flex;
    font-size: 24px;
    justify-content: space-around;
    align-items: center;
    margin: 16px;
  }

  @media screen and (min-width: 425px) {
    .title {
      font-size: 26px;
      margin: 8px 0px 16px 0px;
    }

    .info {
      padding: 24px;
      font-size: 18px;
    }

    .card:nth-child(odd) > .info > .title::before {
      left: -60px;
    }

    .card:nth-child(even) > .info > .title::before {
      right: -60px;
    }

    .icons-language {
      font-size: 36px;
      padding: 8px;
    }
  }
</style>