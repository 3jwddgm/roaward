import React, { Component } from "react";
import Layout from "../theme/Layout";

export default innerComponent =>
  class WithLayoutHoC extends Component {
    render() {
      <Layout>{innerComponent}</Layout>;
    }
  };
