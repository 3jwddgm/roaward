import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayoutHoC = ({ children }) => <Layout>{children}</Layout>;

export default WithLayoutHoC;
