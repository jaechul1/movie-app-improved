import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 64vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 10vw;
`;

function Loader() {
  return (
    <Container>
      <Title>
        <i className="far fa-clock"></i>
      </Title>
    </Container>
  );
}

export default Loader;
