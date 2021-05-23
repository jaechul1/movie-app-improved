import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div``;

const TrendingPresenter = ({ results, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {results && results.length > 0 && (
        <Section title="">
          {results
            .filter(
              (media) =>
                media.media_type === "tv" || media.media_type === "movie"
            )
            .map((media) => (
              <Poster
                key={media.id}
                id={media.id}
                imageUrl={media.poster_path}
                title={media.title || media.name}
                rating={media.vote_average}
                year={
                  media.release_date
                    ? media.release_date.substring(0, 4)
                    : media.first_air_date
                    ? `${media.first_air_date.substring(0, 4)}~`
                    : ""
                }
                isMovie={media.media_type === "movie"}
              ></Poster>
            ))}
        </Section>
      )}
      {error && <Message text={error} color="red" />}
    </Container>
  );

TrendingPresenter.propTypes = {
  results: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TrendingPresenter;
