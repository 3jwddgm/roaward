import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayout = InnerComponent => {
  console.log("111", InnerComponent);
  return class LayoutHoc extends Component {
    render() {
      return (
        <Layout>
          ХУЙ
          <InnerComponent {...this.props} />
        </Layout>
      );
    }
  };
};

export default WithLayout;
