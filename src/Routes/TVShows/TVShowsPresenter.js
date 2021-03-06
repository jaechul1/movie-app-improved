import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div``;

const TVShowsPresenter = ({ airingToday, topRated, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((tvshow) => (
            <Poster
              key={tvshow.id}
              id={tvshow.id}
              imageUrl={tvshow.poster_path}
              title={tvshow.name}
              rating={tvshow.vote_average}
              year={
                tvshow.first_air_date &&
                `${tvshow.first_air_date.substring(0, 4)}~`
              }
              isMovie={false}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((tvshow) => (
            <Poster
              key={tvshow.id}
              id={tvshow.id}
              imageUrl={tvshow.poster_path}
              title={tvshow.name}
              rating={tvshow.vote_average}
              year={
                tvshow.first_air_date &&
                `${tvshow.first_air_date.substring(0, 4)}~`
              }
              isMovie={false}
            ></Poster>
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((tvshow) => (
            <Poster
              key={tvshow.id}
              id={tvshow.id}
              imageUrl={tvshow.poster_path}
              title={tvshow.name}
              rating={tvshow.vote_average}
              year={
                tvshow.first_air_date &&
                `${tvshow.first_air_date.substring(0, 4)}~`
              }
              isMovie={false}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Message text={error} color="red" />}
    </Container>
  );

TVShowsPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVShowsPresenter;
