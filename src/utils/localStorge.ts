class vvLocalSet{
  setLocal(key:string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getLocal(key: string) {
    if(window.localStorage.getItem(key)) {
      const value = window.localStorage.getItem(key) as string
      return JSON.parse(value)
    }
  }

  deleteLocal(key: string) {
    window.localStorage.removeItem(key)
  }

  clearLocal() {
    window.localStorage.clear()
  }
}


export default new vvLocalSet()
