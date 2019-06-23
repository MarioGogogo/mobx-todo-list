import AppStore from "./AppStore"
import AuthStore from './AuthStore'

const appStore = new AppStore()
const authStore = new AuthStore()


const stores = {
    appStore,
    authStore
}


export default stores