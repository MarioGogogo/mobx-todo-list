import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Loading from "../common/Loading";
import NotFound from "../components/NotFound";
import routers from "../router/router";
import history from '../router/history';
import DevTools from 'mobx-react-devtools'
import "../styles/app.scss";

@inject("appStore")
@observer
class App extends Component {
  //开发环境添加 调试工具
  renderDevTool() {
    // if (process.env.NODE_ENV !== "production") {
    //   const DevTools = require("mobx-react-devtools").default;
    //   return <DevTools />;
    // }
    // return <DevTools />;
  }
  render() {
    const {error,isLoading} =this.props.appStore
    return (
      <React.Fragment>
        <NotFound/>
        <DevTools/>
         {/* <Router history={history}>
            <Switch>
              {routers.map((route, i) => {
                return (
                  <Route
                    key={i}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                );
              })}
              <Route component={NotFound} />
            </Switch>
        </Router> */}
        {isLoading && <Loading/>}
        
      </React.Fragment>
    );
  }
}

export default App;
