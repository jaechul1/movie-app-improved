import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div``;

const MoviesPresenter = ({ popular, topRated, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | MAI</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message text={error} color="red" />}
      </Container>
    )}
  </>
);

MoviesPresenter.propTypes = {
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MoviesPresenter;
