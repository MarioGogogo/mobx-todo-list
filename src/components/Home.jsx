import React, { Component,PureComponent } from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Header from '../common/Header';
import PostList from '../components/PostList';
export default  class Home extends PureComponent{
    render() {
      const {match} = this.props;
      console.log('match',match);
      
      const posts = ({match})=>{
        return <div>
             <Router exact path={match.url} component={PostList}/>
        </div>
      }
      return (
          <div>
             <Header></Header>
             {posts}
             <div>123123123</div>
          </div>
      );
    }
}