import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 64vh;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.img`
  width: 5vw;
  height: auto;
`;

function Loader() {
  return (
    <Container>
      <Loading src={require("../assets/loading.gif").default} alt="loading" />
    </Container>
  );
}

export default Loader;
