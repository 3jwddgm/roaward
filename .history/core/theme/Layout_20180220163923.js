import React, { Component } from "react";
import Header from "theme/Header";

export default ({ children }) => {
  return (
    <div className="themed">
      <Header />
      {children}
    </div>
  );
};
