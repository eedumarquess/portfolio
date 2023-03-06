<script setup lang="ts">

</script>

<template>
  <div class="menubar">
    <ul>
      <li>
        HOME
      </li>

      <li>
        ABOUT ME
      </li>

      <li>
        PROJECTS
      </li>

      <li>
        CONTACT ME
      </li>
    </ul>

    <div class="icons">
      <p>
        icons
      </p>
    </div>
  </div>
</template>

<style>
  .menubar {
    font-family: "LeagueSpartan", Helvetica, Arial;
    background-color: #222831;
    color: #fff;
    width: 45vw;
    height: 100vh;
  }

  li{
    font-size: 32px;
    list-style: none;
  }

  li::before{
    content: "\2192";
  }
</style>