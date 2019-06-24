import AppStore from "./AppStore"
import AuthStore from './AuthStore'
import HomeStore from './HomeStore'
const appStore = new AppStore()
const authStore = new AuthStore()
const homeStore = new HomeStore()

const stores = {
    appStore,
    authStore,
    homeStore
}


export default stores