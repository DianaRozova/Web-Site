<script setup>
import { listOfLinks } from '@/stores/mainlinks';

const { list } = listOfLinks();
</script>

<template>
  <main>
    <div class="about">
      <!-- <h1>Ссылки на страницы стримака</h1> -->
      <div class="list-links">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <a :href="item.link" target="_blank">{{ item.displayName }}</a>
          </li>
        </ul>
      </div>
      <div id="insta" class="elfsight-app-42cbd326-b041-4430-b8d0-31f24756fbb7"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: row;

  h1{
    font-size: 16px;
    text-align: center;
  }

  .list-links {
    ul {
      list-style: none;
      display: inline-flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin: 10px auto;
      justify-content: center;

      li {
        border: 2px solid #5fced6;
        padding: 5px 10px;
        margin: 5px 10px;
        background-color: #5fced6;

        a {
          color: #003A69;
        }
      }
    }
  }

  #insta, .list-links {
    width: 50%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
}
</style>
