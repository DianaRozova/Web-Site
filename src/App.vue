<script setup>
import { RouterView } from 'vue-router'
import HeaderMain from './components/Header/HeaderMain.vue';
</script>

<template>
  <HeaderMain/>

  <RouterView />
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
