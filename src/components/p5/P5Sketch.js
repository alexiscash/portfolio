import React, { createRef, useEffect } from "react";
import p5 from "p5";
import sketch from "./sketch";

export default function P5Sketch() {
  const p5Ref = createRef();

  useEffect(() => {
    new p5(sketch, p5Ref.current);
  }, []);

  return (
    <div className={"p5Container"}>
      <div className={"p5Content"} ref={p5Ref}></div>
    </div>
  );
}
