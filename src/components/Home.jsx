import React, { Component, PureComponent } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Header from "../common/Header";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";
import { observer, inject } from "mobx-react";

const todos = [
  {
    id: "001",
    taskname: "富强"
  },
  {
    id: "002",
    taskname: "民主"
  },
  {
    id: "003",
    taskname: "自由"
  },
  {
    id: "004",
    taskname: "平等"
  }
];
@inject('homeStore')
@observer
 class Home extends Component {
  state={
    user:{name:"共产党",age:"44"}
  }

  changUser=()=>{
      // this.setState({
      //   user:{name:"美国🇺🇸统一",age:"45"}
      // })
  }
  render() {
    
    console.log('HomeRender');
    
    const { match, location,homeStore } = this.props;
    console.log("match", match, location);

    // const posts = ({ match }) => {
    //   return (
    //     <div>
    //       <Route exact path={match.url} component={PostList} />
    //       <Route path={`${match.url}/:id`} component={PostDetail} />
    //     </div>
    //   );
    // };
    return (
      
      <div>
        <Header />
        {/* 帖子路由配置 */}
        <Route
          exact
          path={match.url}
          render={props => <PostList {...props} user={this.state.user} todos={todos} />}
        />
        <Route path={`${match.url}/:id`} component={PostDetail} />
        <div onClick={homeStore.setUser}>更新user对象</div>
      </div>
    );
  }
}

export default Home
