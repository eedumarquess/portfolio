<script setup lang="ts">
  import Menu from '@/components/menu/Menu.vue';
  import Card from '@/components/project-card/Card.vue';
</script>

<template>
  <div class="projects-body">
    <div class="projects-text">
      <h1>
        /projects
      </h1>
      <p>
        some important projects i've worked on
      </p>
    </div>
    
    <div class="projects-cards">
      <Card 
        project-image="tim-live"
        project-title="TIM Live - Parceiros"
        project-link="https://www.timlivepromocao.com.br"
      />

      <Card 
        project-image="wing"
        project-title="Wing Solutions"
        project-link="https://www.wing.solutions"
      />

      <Card 
        project-image="telavita"
        project-title="Telavita"
        project-link="https://www.telavita.com.br"
      />

      <Card 
        project-image="potencial"
        project-title="Potencial Tecnologia"
        project-link="https://www.potencialtecnologia.com.br"
      />

      <Card 
        project-image="peak"
        project-title="Peak Invest"
        project-link="https://www.peakinvest.com.br"
      />

      <Card 
        project-image="github"
        project-title="My Github"
        project-link="https://www.github.com/eedumarquess"
      />
    </div>
      
  </div>
</template>

<style>
  .projects-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 105px;
  }

  .projects-text > h1 {
    text-align: center;
    margin: 4px;
    font-size: 48px;
    font-weight: 500;
  }

  .projects-text > p {
    text-align: center;
    color: #1B98E0;
    margin: 8px;
    font-size: 26px;
    font-weight: 300;
  }

  .projects-cards {
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin: 54px 0px;
  }



</style>