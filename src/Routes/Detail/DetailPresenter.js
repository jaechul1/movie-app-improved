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
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleBox = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.div`
  font-size: 2vw;
`;

const Imdb = styled.div`
  font-size: 1.5vw;
  color: #f5c518;
  margin-right: 0.5vw;
`;

const Homepage = styled.div`
  font-size: 1.5vw;
  opacity: 0.5;
  margin-right: 0.5vw;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  font-size: 1.3vw;
  color: #e4bb24;
`;

const Rating = styled.div`
  font-size: 1vw;
  margin-left: 0.3vw;
`;

const SmallText = styled.span`
  font-size: 0.5vw;
  opacity: 0.6;
`;

const Count = styled.div`
  font-size: 0.7vw;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  margin-top: 0.1vh;
`;

const ItemContainer = styled.div`
  margin: 3vh 0;
  font-size: 1vw;
  opacity: 0.5;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 0.3vw;
`;

const Overview = styled.p`
  width: 100%;
  font-size: 1.2vw;
  opacity: 0.8;
  line-height: 1.5;
`;

const YoutubeEmbed = styled.div`
  border-radius: 3%;
  margin-top: 2vh;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  & iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
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
        <title>{result.title || result.name} | MAI</title>
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
          <HeaderBox>
            <TitleBox>
              <Title>{result.title || result.name}</Title>
            </TitleBox>
            <RatingBox>
              {result.imdb_id && (
                <Imdb>
                  <a
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-imdb"></i>
                  </a>
                </Imdb>
              )}
              {result.homepage && (
                <Homepage>
                  <a href={result.homepage} target="_blank" rel="noreferrer">
                    <i class="fas fa-link"></i>
                  </a>
                </Homepage>
              )}
              <Star>
                <i class="fas fa-star"></i>
              </Star>
              <Rating>
                <div>
                  <span>{result.vote_average}</span>
                  <SmallText>/10</SmallText>
                </div>
                <Count>
                  {result.vote_count
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Count>
              </Rating>
            </RatingBox>
          </HeaderBox>
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
                ? `${result.episode_run_time[0]} min`
                : "TBA"}
            </Item>
            <Divider>&nbsp;•&nbsp;</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index + 1 === result.genres.length
                    ? genre.name
                    : `${genre.name}, `
                )}
            </Item>
          </ItemContainer>
          <Overview>
            {result.overview.length > 500
              ? `${result.overview.substring(
                  0,
                  (result.overview + " ").lastIndexOf(" ", 500)
                )}...`
              : result.overview}
          </Overview>
          {result.videos.results[0] && (
            <YoutubeEmbed>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${result.title || result.name} Embedded`}
              />
            </YoutubeEmbed>
          )}
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
