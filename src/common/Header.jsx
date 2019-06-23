import React, { Component, PureComponent } from "react";
import {Link} from 'react-router-dom';
import "../styles/common/header.scss";

export default class Header extends PureComponent {
 
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-right">
          <span className="header-right-item" ><Link to="/login">登录</Link> </span>
          <span className="header-right-item">头像</span>
        </div>
      </div>
    );
  }
}
