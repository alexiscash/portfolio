import React, { createRef, useEffect } from "react";
import p5 from "p5";
import styled from "styled-components";
import sketch from "./sketch";

const P5Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export default function P5Sketch() {
  const p5Ref = createRef();

  useEffect(() => {
    new p5(sketch, p5Ref.current);
    console.log("hey get out of here you scoundrel!");
  });

  return (
    <P5Container>
      <div className="p5-content" ref={p5Ref}></div>
    </P5Container>
  );
}
