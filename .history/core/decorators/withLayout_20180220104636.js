import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayout = InnerComponent => {
  return class LayoutHoc extends Component {
    render() {
      return (
        <Layout>
          <InnerComponent {...this.props} />
        </Layout>
      );
    }
  };
};

export default WithLayout;
