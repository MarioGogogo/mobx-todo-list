import React, { PureComponent,Component } from 'react';
import TodoView from '../common/TodoView'
import { observer, inject } from "mobx-react";

@inject("homeStore")
@observer
 class PostList extends Component{
    render() {
      const {user,todos,homeStore} = this.props
      return (
          <div>
            <h1>PostList关于系列</h1>
            <span>{homeStore.user}</span>
            <ul>
              {todos.map(todo=>
                 (<TodoView todo={todo} key={todo.id} />)
              )}
            </ul>
            <button onClick={homeStore.setUser}>更新user</button>
          </div>
      );
    }
}

export default PostList