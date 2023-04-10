import { defineStore } from 'pinia';
import data from './listOfLinks.json' assert { type: 'JSON' };
import { getListLinks } from '../serverHelpers/links';

export const listOfLinks = defineStore('links', async () => {
  let list = data;
  await getListLinks().then((serverData) => {
    console.log(serverData);
    list = serverData;
  }).catch((err) => {
    console.log(err);
  });
  return { list };
});

