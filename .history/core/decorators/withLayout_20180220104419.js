import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayout = innerClass => {
  console.log("111", innerClass);
  return class LayoutHoc extends Component {
    render() {
      <div>ХУЙ</div>;
    }
  };
};

export default WithLayout;
