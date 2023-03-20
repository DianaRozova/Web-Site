<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <header>
        <!-- <div alt="Vue logo" class="logo"></div> -->
        <h1 class="header">DiaChanka</h1>

        <div class="wrapper">
          <!-- <RouterLink to="/">Главная</RouterLink> -->
        </div>
    </header>
</template>

<style scoped lang="scss">
$header-height: 60px;

header {
  height: $header-height;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .header {
    margin: auto 10px;
    font-family: 'Arial Black';
    color: #003A69;
    font-weight: bold;
    font-size: 24px;
  }

  .wrapper {
    margin: auto;

    a {
      color: #3E7FB5;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        color: #0F436D;
        border-bottom: 1px #0F436D;
      }
    }

  }

  @media (min-width: 1024px) {
    display: flex;
    place-items: center;

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
}

// .logo {
//   width: $header-height;
//   height: $header-height;
//   background: no-repeat center/contain url('../assets/favicon.png');
// }
</style>
