<template>
    <div class="main-menu">
        <button class="menu-button" @click="toggleMenu">Меню</button>
        <ul v-if="isMenuShow" class="main-menu-links">
            <MenuItem v-for="(item, index) in listOfMainLinks" :item="item" :key="index" />
        </ul>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  name: "MainMenu",
  components: {
    MenuItem
  },
  data: () => {
    return {
        listOfMainLinks: [{
            to: "/",
            text: "Главная",
        },{
            to: "/about",
            text: "Обо мне",
        }],
        isMenuShow: false,
    };
  },
  methods: {
    toggleMenu(flag) {
        var _this = this;
        const closeListerner = (e) => {
            if (_this.catchOutsideClick(e))
            window.removeEventListener('click', closeListerner) , _this.isMenuShow = false
        }
        window.addEventListener('click', closeListerner)
        this.isMenuShow = (flag !== undefined && typeof(flag) === "boolean") ? flag : !this.isMenuShow;
    },
    catchOutsideClick(event)  {
        // When user clicks menu — do nothing
        if(event.target.closest('.main-menu')) return false;
        // When user clicks outside of the menu — close the menu
        if( this.isMenuShow && !event.target.closest('.main-menu')) return true;
    }
  },
}
</script>

<style scoped lang="scss">
.main-menu {
    background-color: var(--base-background-colour);
    position: absolute;
    right: 15px;

    .menu-button {
        background-color: var(--base-background-colour);
        border: none;
        font-size: 18px;
        color: var(--base-text-colour);
    }
    .main-menu-links {
        list-style-type: none;
        padding: 0;
        overflow: hidden;
        position: absolute;
        height: auto;
        right: 0;
        top: 50px;
        width: 100px;
        text-align: right;
    }
}
</style>
