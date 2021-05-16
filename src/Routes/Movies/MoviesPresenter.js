import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div``;

function MoviesPresenter({ popular, error, loading }) {
  return loading ? (
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
      {error && <Message text={error} color="red" />}
    </Container>
  );
}

MoviesPresenter.propTypes = {
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MoviesPresenter;
