import React, { Component,PureComponent } from 'react';
 

export default  class TodoView extends PureComponent{
    render() {
      console.log('itemrender');
      const {todo} = this.props
      return (
          <div>
            <h1>ListItem</h1>
            <span>{todo.taskname}</span>
          </div>
      );
    }
}