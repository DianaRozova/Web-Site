import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const listOfLinks = defineStore('links', () => {
  const list = [
    {displayName: 'Instagram', link: 'https://www.instagram.com/rozova_diana1999/'},
    {displayName: 'VK', link: 'https://vk.com/dianka.rozova'}
  ]

  return { list }
})
