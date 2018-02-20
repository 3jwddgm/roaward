import React, { Component } from "react";
import Layout from "../theme/Layout";

export default childClass =>
  class extends Component {
    render() {
      <Layout>{childClass}</Layout>;
    }
  };
