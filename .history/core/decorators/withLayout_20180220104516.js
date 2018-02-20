import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayout = InnerComponent => {
  console.log("111", InnerComponent);
  return class LayoutHoc extends Component {
    render() {
      return (
        <div>
          ХУЙ<InnerComponent />
        </div>
      );
    }
  };
};

export default WithLayout;
