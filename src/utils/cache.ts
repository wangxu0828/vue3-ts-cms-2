class Cache {
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    } else {
      return Promise.reject(new Error())
    }
  }

  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export const cache = new Cache()
