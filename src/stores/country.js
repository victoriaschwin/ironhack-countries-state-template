import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => {
    country {};
  },

  actions: {
    setCountry(el) {
      this.country = {
        name: el.name.common,
        capital: el.capital[0],
        area: el.area,
        borders: el.borders
        
      }
    }
});
