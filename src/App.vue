<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <!-- <img class="v-img__img v-img__img--contain" src="https://cdn.vuetifyjs.com/docs/images/one/logos/vuetify-logo-light.png" style=""> -->
    <a href="https://vuetifyjs.com/" target="_blank">
      <img
        src="./assets/vuetify-logo.svg"
        class="logo vuetify"
        alt="Vuetify logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Vuetify" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
