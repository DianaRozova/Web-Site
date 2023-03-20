<script setup>
import { listOfLinks } from '@/stores/mainlinks';

const { list } = listOfLinks();
</script>

<template>
  <main>
    <div class="about">
      <h1>Главная страница</h1>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <a :href="item.link" target="_blank">{{ item.displayName }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>
