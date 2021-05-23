import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% {opacity: 0; transform: translateY(5vh);};
  100% {opacity: 1; transform: translateY(0);};
`;

const Container = styled.div`
  margin: 3vh 3vw 5vh 3vw;
  animation: ${Animation} 1s ease-out;
`;

const Title = styled.span`
  display: ${(props) => (props.empty ? "none" : "block")};
  width: 100%;
  padding: calc(1vw + 2vh) 0;
  text-align: center;
  font-size: 2.5vw;
  font-weight: 100;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const Grid = styled.div`
  margin-top: calc(2vw + 3vh);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 1.5vw;
  row-gap: 2vh;
  justify-content: center;
`;

function Section({ title, children }) {
  return (
    <Container>
      <Title empty={title === ""}>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
