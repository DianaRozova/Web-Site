<script>
import { RouterLink } from 'vue-router'
// import MainMenu from './MainMenu/MainMenu.vue';

export default {
  name: "HeaderMain",
  components: {
    // MainMenu
  },
  data: () => {
    return {};
  },
}
</script>

<template>
    <header>
        <!-- <div alt="Vue logo" class="logo"></div> -->
        <h1 class="header">DiaChanka</h1>

        <!-- <MainMenu/> -->

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
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.2);

  .header {
    margin: auto 10px;
    font-family: 'Arial Black';
    color: var(--base-text-colour);
    font-weight: bold;
    font-size: var(--base-h1-font-size);
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
