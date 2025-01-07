import React from "react";
const DummyComponent = ({ ...prop }) => {
  console.log("prop:", prop);
  return (
    <>
      <p>Dummy COmponent:</p>
      <div>{prop.prop}</div>
    </>
  );
};

export default React.memo(DummyComponent);
