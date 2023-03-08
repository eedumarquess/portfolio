<script setup lang="ts">

</script>

<template>
  <div class="menubar-sidebar">
    <img 
      class="icon-menu" 
      src="../../assets/images/bars-solid.svg" 
      v-on:click=""
    />
  </div>

  <div>

  </div>
</template>

<style>
  .menubar-sidebar {
    position: relative;
  }

  .icon-menu {
    margin: 50px;
    filter: invert(95%) sepia(100%) saturate(14%) hue-rotate(213deg) brightness(104%) contrast(104%);
    width: 60px;
  }
</style>