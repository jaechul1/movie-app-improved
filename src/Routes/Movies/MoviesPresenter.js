import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;

function MoviesPresenter({ popular, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map((movie) => movie.title)}</Section>
      )}
    </Container>
  );
}

MoviesPresenter.propTypes = {
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MoviesPresenter;
