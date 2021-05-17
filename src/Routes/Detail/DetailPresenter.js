import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  height: calc(94vh - 4vw);
  position: relative;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  opacity: 0.3;
  position: absolute;
  filter: blur(1px);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 5vh 3vw 5vh 3vw;
  z-index: 1;
`;

const Cover = styled.div`
  width: 28%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 3%;
  box-shadow: 0 0 1px white;
`;

const Data = styled.div`
  width: 72%;
  padding: 2vh 0 2vh 3vw;
`;

const Title = styled.span`
  font-size: 2vw;
`;

const ItemContainer = styled.div`
  margin: 3vh 0;
  font-size: 1vw;
  opacity: 0.5;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 0.5vw;
`;

const Overview = styled.p`
  width: 70%;
  font-size: 1.2vw;
  opacity: 0.8;
  line-height: 1.5;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | MAI</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_title || result.original_name} | MAI</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPoster.jpg").default
          }
        />
        <Data>
          <Title>{result.original_title || result.original_name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date
                ? `${result.first_air_date.substring(0, 4)}~`
                : "TBA"}
            </Item>
            <Divider>&nbsp;•&nbsp;</Divider>
            <Item>
              {result.runtime
                ? `${result.runtime} min`
                : result.episode_run_time
                ? `${result.episode_run_time} min`
                : "TBA"}
            </Item>
            <Divider>&nbsp;•&nbsp;</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index + 1 === result.genres.length
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
      {error && <Message text={error} color="red" />}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
