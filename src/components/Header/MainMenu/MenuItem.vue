<script>
import { RouterLink } from 'vue-router'

export default {
  name: "MenuItem",
  components: {
    RouterLink
  },
  props: {
    item: Object
  },
  data: () => {
    return {};
  },
}
</script>

<template>
    <li class="menu-link">
        <RouterLink :to="item.to">{{ item.text }}</RouterLink>
    </li>
</template>

<style scoped lang="scss">
.main-link {
    background-color: var(--base-background-colour);
}
</style>
