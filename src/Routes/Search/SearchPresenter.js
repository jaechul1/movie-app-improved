import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div``;

const Form = styled.form`
  margin: 3vh 3vw calc(2vw + 2vh) 3vw;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 2vw;
`;

const SearchPresenter = ({
  tvshowResults,
  movieResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {tvshowResults && tvshowResults.length > 0 && (
          <Section title="TV Show Results">
            {tvshowResults.map((tvshow) => (
              <Poster
                key={tvshow.id}
                id={tvshow.id}
                imageUrl={tvshow.poster_path}
                title={tvshow.name}
                rating={tvshow.vote_average}
                year={
                  tvshow.first_air_date && tvshow.first_air_date.substring(0, 4)
                }
                isMovie={false}
              ></Poster>
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message text={error} color="red" />}
    {movieResults &&
      tvshowResults &&
      movieResults.length === 0 &&
      tvshowResults.length === 0 && (
        <Message text="No results found" color="gray" />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  tvshowResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
