import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;

function TVShowsPresenter({ topRated, popular, error, loading }) {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((tvshow) => tvshow.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((tvshow) => tvshow.name)}
        </Section>
      )}
    </Container>
  );
}

TVShowsPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVShowsPresenter;
