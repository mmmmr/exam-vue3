import { defineStore, acceptHMRUpdate } from 'pinia'

export const userInfo = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'pinia',
      isAdmin: true,
      count: 1
    }
  },

  actions: {
    changeName(name?:string,isAdmin?:boolean){
      this.count ++
      this.name = this.name + this.count
      this.isAdmin = !this.isAdmin
    }
  },
})
