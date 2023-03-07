<script setup lang="ts">

</script>

<template>
  <div class="menubar-sidebar">
    <p class="close-button">
      x
    </p>

    <div class="url-navigate">
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
    </div>

    <div class="icons">
      <p>
        icons
      </p>
    </div>
  </div>
</template>

<style>
  .menubar-sidebar {
    font-family: "LeagueSpartan";
    background-color: #222831;
    color: #fff;
    width: 350px;
    height: 100vh;
  }

  .close-button {
    padding: 50px;
    font-size: 40px;
  }

  .url-navigate > ul {
    height: 50vh;
    display: flex;
    flex-direction: column;
    background-color: green;
  }

  .url-navigate > ul > li {
    padding: 15px;
    font-weight: 500;
  }

  .icons {
    position: absolute;
    bottom: 0;
  }

  li{
    font-size: 32px;
    list-style: none;
  }

  li::before{
    content: "\2192";
  }
</style>