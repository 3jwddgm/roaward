import React, { Component } from "react";
import Layout from "../theme/Layout";

const WithLayout = ({ children }) => <Layout>{children}</Layout>;

export default WithLayout;
