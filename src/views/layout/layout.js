import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

class Layout extends Component {
  render() {
    console.log("children", this.props);
    return (
      <React.Fragment>
        <div className="wrapper">
          <Sidebar></Sidebar>
          <Header></Header>
          <div className="main-panel">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
