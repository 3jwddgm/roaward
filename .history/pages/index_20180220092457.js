import React from "react";

const logger = (item) => { console.log("logger", item); }

@logger
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
