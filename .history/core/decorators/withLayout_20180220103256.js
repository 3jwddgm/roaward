import React, { Component } from "react";
import Layout from "../theme/Layout";

export default innerComponent => {
  console.log("decorator", innerComponent);
  return twoComponent => {
    console.log("2", twoComponent);
    return class WithLayoutHoC extends Component {
      render() {
        <Layout>{innerComponent}</Layout>;
      }
    };
  };
};
