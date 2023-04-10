import { defineStore } from 'pinia';
import data from './listOfLinks.json' assert { type: 'JSON' }; 
import { getListLinks } from '../serverHelpers/links';

export const listOfLinks = defineStore('links', {
  state: () => ( {list: []}),
  getters: {
    listLinks: async (state) => {
      await getListLinks().then((serverData) => {
        if (serverData.length) {
          state.list = serverData;
        } else {
          state.list = data;
        }
      }).catch((err) => {
        console.log(err);
        state.list = data;
      });
      return { list: state.list };
    }
  }  
});
