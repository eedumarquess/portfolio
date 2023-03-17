<script lang="ts">  
  export default {
    props: {
      projectImage: String,
      projectTitle: String,
      projectLink: String,
    },
    computed: {
      imageUrl() {
        return new URL(`/public/assets/images/${this.projectImage}.png`, import.meta.url).toString();
      },
    },
  }
</script>

<template>
  <div class="card-body">
    <a v-bind:href=projectLink>
      <div class="card-image">
        <img :src=imageUrl>
      </div>
      <div class="card-text">
        <p class="project-title">
          {{ projectTitle }}
        </p>

        <p class="project-link">
          {{ projectLink?.slice(12, projectLink.length) }}
        </p>
      </div> 
    </a>
    
  </div>
</template>

<style>
  .card-body {
    width: 100%;
    margin: 16px;
    border-radius: 8px;
  }

  .card-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    aspect-ratio: 3.5/2;
    object-fit: contain;
    border-radius: 8px 8px 0px 0px;
    background-color: #fff;
  }

  .card-text {
    margin: 2px 0px;
    padding: 8px;
    border-radius: 0px 0px 8px 8px;
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
    box-shadow: 0px 0px 0px 2px rgba(27, 152, 224, 0.25)
  }

  .project-title {
    font-size: 20px;
    margin: 8px 0px 4px 2px;
    color: #fff;    
  }

  .project-link {
    font-size: 16px;
    margin: 4px 0px 8px 2px;
    color: #1B98E0;
  }
  
  .card-body > a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (min-width: 760px) {
    .card-body {
      width: 415px;
      height: 300px;
      margin: 0px 12px 64px 12px;
      border-radius: 8px;
    }

    .project-title {
      font-size: 32px;
      margin: 16px 0px 4px 8px;
    }

    .project-link {
      font-size: 24px;
      margin: 4px 0px 16px 8px;
    }
  }
</style>