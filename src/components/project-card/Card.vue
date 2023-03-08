<script lang="ts">

  export default {
    props: {
      projectImage: String,
      projectTitle: String,
      projectLink: String,
    }
  }
</script>

<template>
  <div class="card-body">
    <a v-bind:href=projectLink>
      <div class="card-image">
        <img :src="`src/assets/images/${projectImage}.png`">
      </div>
      <div class="card-text">
        <p class="project-title">
          {{ projectTitle }}
        </p>

        <span class="project-link">
          {{ projectLink?.slice(12, projectLink.length) }}
        </span>
      </div> 
    </a>
    
  </div>
</template>

<style>
  .card-body {
    width: 415px;
    height: 300px;
    margin: 15px;
    border-radius: 8px;
  }

  .card-image {
    width: 415px;
    height: 200px;
    border-radius: 8px 8px 0px 0px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-text {
    width: 411.5px;
    height: 100px;
    margin: 2px 0px 0px 2px;
    border-radius: 0px 0px 8px 8px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
    box-shadow: 0px 0px 0px 2px rgba(27, 152, 224, 0.25)
  }

  .project-title {
    font-size: 24px;
    color: #fff;
    padding: 30px 20px 5px 20px
  }

  .project-link {
    font-size: 16px;
    color: #1B98E0;
    margin: 5px 20px 30px 20px;
  }

  a {
    text-decoration: none;
  }
</style>