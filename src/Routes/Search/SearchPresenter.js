import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  margin: 0 2vw 0 2vw;
`;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 2vw;
`;

function SearchPresenter({
  tvshowResults,
  movieResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) {
  return (
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
              {movieResults.map((movie) => movie.title)}
            </Section>
          )}
          {tvshowResults && tvshowResults.length > 0 && (
            <Section title="TV Show Results">
              {tvshowResults.map((tvshow) => tvshow.name)}
            </Section>
          )}
        </>
      )}
    </Container>
  );
}

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
