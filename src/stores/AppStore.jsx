import { observable, computed, action } from 'mobx';

class AppStore {
  @observable requestQuantity = 0
  @observable error = null

  @computed get isLoading(){
      return this.requestQuantity > 0
  }

  @action increaseRequest(){
      this.requestQuantity ++
  }
  @action decreaseRequest(){
    this.requestQuantity --
}
  @action setError(error){
      this.error =error
  }
  
  //错误信息 作为回调函数被单独调用 所以这里需要绑定this
  @action.bound removeError(){
     this.error = null
  }
  
}
export default AppStore;