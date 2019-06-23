import { observable, computed, action } from "mobx";
import appStore from './AppStore'

class AuthStore {
  api;
  appStore;
  @observable userId = sessionStorage.getItem("userId");
  @observable username = sessionStorage.getItem("username");
  @observable password = "";

  //通过构造函数传递api和appstore
  constructor(api, appStore) {
    this.api = api;
    this.appStore = appStore;
  }

  @action setUsername(username) {
    this.username = username;
  }

  @action setPassword(password) {
    this.password = password;
  }

  //api登录请求
  @action login() {
    this.appStore.increaseRequest()
    const parames = {
       username:this.username,
       password:this.password
    }

    return this.api.login(parames).then(action(data=>{
        this.appStore.decreaseRequest()
        if(!data.error){
           this.userId = data.userId
           sessionStorage.setItem('userId',this.userId)
           sessionStorage.setItem('username',this.username)
           return Promise.resolve()
        }else{
          this.appStore.setError(data.error)
          return Promise.reject()
        }
    }))
  }

  @action.bound logout(){
      this.userId = null;
      this.username = null;
      this.password = null;
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem('username')
  }


}
export default AuthStore;
