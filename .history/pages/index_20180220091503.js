import React from "react";

const logger = (item) => { console.log("logger", item); return item; }

@logger("s");
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
