import React, { Component } from "react";
import Layout from "../theme/Layout";

export default function withLayoutDecorator() {
  return childClass =>
    class extends Component {
      render() {
        <Layout>{childClass}</Layout>;
      }
    };
}
