import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin: 3vh 3vw 5vh 3vw;
`;

const Title = styled.span`
  display: block;
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
  gap: 1vw;
`;

function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
