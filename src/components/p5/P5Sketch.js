import React, { createRef, useEffect } from "react";
import p5 from "p5";
import sketch from "./sketch";

export default function P5Sketch() {
  const p5Ref = createRef();

  useEffect(() => {
    new p5(sketch, p5Ref.current);
    console.log("hey get out of here you scoundrel!");
  });

  return (
    <div className="p5-container">
      <div ref={p5Ref} className="p5-content"></div>
    </div>
  );
}
