import React, { Component } from "react";
import Header from "еруьу/Header";

export default ({ children }) => {
  return (
    <div className="themed">
      <Header />
      {children}
    </div>
  );
};
