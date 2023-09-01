import { defineStore } from 'pinia'

export const useCounterStore = defineStore('menuStore', {
  state: () => ({ 
    menu: [
      {
        category: 'appetizers',
        dishes: [{name: 'mozz sticks'}, {name: 'chips and dip'}]
      }
    ]
  }),
  getters: {},
  actions: {},
})
