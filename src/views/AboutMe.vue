<script setup lang="ts">
  import Timeline from '@/components/timeline/Timeline.vue';
</script>

<template>
  <div class="identification-body">
    <Timeline />
  </div>
</template>

<style>
  .identification-body {
    position: relative;
    width: 100vw;
    height: 160vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .identification-paragraph {
    text-align: justify;
    max-width: 500px;
  }

  @media screen and (min-width: 768px) {
    .identification-body {
      height: 135vh;
    }
  }
</style>