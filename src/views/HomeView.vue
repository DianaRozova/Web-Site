<template>
    <div class="about">
      <!-- <h1>Ссылки на страницы стримака</h1> -->
      <div class="list-links">
        <ul v-if="!loading" >
          <li v-for="item in links" :key="item.link_key">
            <a :href="item[1]" target="_blank">{{ item[0] }}</a>
          </li>
        </ul>
        <SpinnerIcon v-else />
      </div>
    </div>
</template>

<script>
import { listOfLinks } from '@/stores/mainlinks';
import SpinnerIcon from "../components/icons/SpinnerIcon.vue";

export default {
  name: 'HomeView',
  components: {
    SpinnerIcon
  },
  data:() => {
    return {
      links: [],
      loading: true,
    }
  },
  async mounted() {
    this.loading = true;
    const linkStore = listOfLinks();
    let { list } = await linkStore.listLinks;
    this.links = list;
    this.loading = false;
  }
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  --button-background-base-color: #5f94d6;
  --button-text-color: #ffffff;

  h1{
    font-size: 16px;
    text-align: center;
  }

  .list-links {
    width: 100%;
    height: 100%;
    ul {
      list-style: none;
      display: inline-flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin: 10px auto;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 100%;
      height: 80%;

      li {
        border: 2px solid var(--button-background-base-color);
        padding: 5px 10px;
        margin: 5px 10px;
        background-color: var(--button-background-base-color);
        border-radius: 10px;
        animation: moveInBottom 5s ease-out;
        animation-fill-mode: backwards;

        &:link,
        &:visited {
            text-transform: uppercase;
            text-decoration: none;
            padding: 15px 40px;
            display: inline-block;
            border-radius: 100px;
            transition: all .2s;
            position: absolute;
        }

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(-1px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        &::after {
            content: "";
            display: inline-block;
            height: 100%;
            width: 100%;
            border-radius: 100px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            transition: all .4s;
        }

        &:hover::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }

        @keyframes moveInBottom {
            0% {
                opacity: 0;
                transform: translateY(30px);
            }

            100% {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        a {
          color: var(--button-text-color);
        }
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
}
</style>
