import vvRequst from "../service";
import { account } from '../../stores/user/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function login(params: account) {
  return vvRequst.post<any>({
    url: LoginAPI.AccountLogin,
    data: params
  })
}

export function getUserInfo(params: string) {
  return vvRequst.get<any>({
    url: LoginAPI.LoginUserInfo + params
  })
}

export function getUserMenus(params: string) {
  return vvRequst.get<any>({
    url: LoginAPI.UserMenus + params + '/menu'
  })
}
