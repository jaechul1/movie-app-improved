import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 5vh;
  }
  margin-left: 2vw;
  margin-right: 2vw;
`;

const Title = styled.span`
  font-size: 2vw;
  font-weight: 700;
`;

const Grid = styled.div`
  margin-top: 3vh;
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
