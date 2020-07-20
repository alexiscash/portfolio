import React from "react";
import styled from "styled-components";

// const BackgroundDiv = styled.div`
//   background-image: url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
//   background-color: lightblue;
//   height: 100%;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

// const BackgroundDiv = styled.div`
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 100%;
// `;

const BackgroundDiv = styled.div`
  background-image: url('../images/background.jpg);
  width: 600px;
  height: 1000px;
`;

const Image = styled.img`
  min-height: 100%;
  min-width: 1000px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const url = require("../images/background.jpg");

export default function LandingPage() {
  return (
    <BackgroundDiv>
      {/* <Image src={url} alt="fuck you" /> */}
      ayyy lmao
      <div style={{ color: "white" }}>hello</div>
    </BackgroundDiv>
  );
}
