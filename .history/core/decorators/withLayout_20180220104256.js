import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayout = innerClass => {
  console.log("111", innerClass);
  return innerClass;
};

export default WithLayout;
