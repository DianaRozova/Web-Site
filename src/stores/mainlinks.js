import { defineStore } from 'pinia'
import data from './listOfLinks.json' assert { type: 'JSON' };

export const listOfLinks = defineStore('links', () => {
  let list = data.array;
  return { list }
})
