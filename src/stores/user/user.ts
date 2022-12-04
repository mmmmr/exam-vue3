import { defineStore, acceptHMRUpdate } from 'pinia'
import { account } from './types'
import { login, getUserInfo, getUserMenus } from '../../service/user/user'
import vvLocal from '../../utils/localStorge'


export const userInfoStore = defineStore('user',{
  state: () => {
    return {
      name: '',
      password: '',
      token: '',
      id: ''
    }
  },
  actions: {
    async login(account: account) {
      const { data: { token, id } } = await login(account)
      this.token = token
      this.id = id
      vvLocal.setLocal('TOKEN', token)

      const { data : userInfo } = await getUserInfo(this.id)
      vvLocal.setLocal('USER_INFO', userInfo)

      const { data: userMenus } = await getUserMenus(this.id)
      vvLocal.setLocal('UserMenus', userMenus)
    },
    reloadLocal() {
      this.token = vvLocal.getLocal('TOKEN')
    }
  }
})
