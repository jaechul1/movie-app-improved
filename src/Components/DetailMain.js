import React from "react";
import styled, { keyframes } from "styled-components";
import Loader from "./Loader";
import Message from "./Message";

const Animation = keyframes`
  0% {opacity: 0; transform: translateY(5vh);};
  100% {opacity: 1; transform: translateY(0);};
`;

const Container = styled.div`
  animation: ${Animation} 1s ease-out;
  padding: 5vh 10vw 5vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cover = styled.div`
  width: 80vw;
  height: 120vw;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 3%;
`;

const Data = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const HeaderBox = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
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
  margin-right: 0.7vw;
`;

const Homepage = styled.div`
  font-size: 1.5vw;
  opacity: 0.5;
  margin-right: 0.4vw;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  font-size: 1.5vw;
  color: #e4bb24;
`;

const Rating = styled.div`
  font-size: 1vw;
  margin-left: 5px;
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
  margin-top: 1px;
`;

const ItemContainer = styled.div`
  font-size: 1vw;
  opacity: 0.5;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 3px;
`;

const Overview = styled.p`
  font-size: 1.4vw;
  opacity: 0.8;
  line-height: 1.5;
  margin-top: 20px;
`;

const DetailMain = ({ result, error, loading, titleUpdater }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {titleUpdater(`${result.title || result.name} | MAI`)}
      <HeaderBox>
        <TitleBox>
          <Title className="DetailTitle">{result.title || result.name}</Title>
        </TitleBox>
        <RatingBox>
          {result.imdb_id && (
            <Imdb className="Icon">
              <a
                href={`https://www.imdb.com/title/${result.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-imdb"></i>
              </a>
            </Imdb>
          )}
          {result.homepage && (
            <Homepage className="Icon">
              <a href={result.homepage} target="_blank" rel="noreferrer">
                <i className="fas fa-link"></i>
              </a>
            </Homepage>
          )}
          <Star className="Icon">
            <i className="fas fa-star"></i>
          </Star>
          <Rating className="RatingText">
            <div>
              <span>{result.vote_average}</span>
              <SmallText className="SmallText">/10</SmallText>
            </div>
            <Count className="CountText">
              {result.vote_count
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Count>
          </Rating>
        </RatingBox>
      </HeaderBox>

      <Cover
        bgImage={
          result.poster_path
            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
            : require("../assets/noPoster.jpg").default
        }
      />

      <Data>
        <ItemContainer className="ItemContainer">
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
              ? result.episode_run_time[0]
                ? `${result.episode_run_time[0]} min`
                : "TBA"
              : "TBA"}
          </Item>
          <Divider>&nbsp;•&nbsp;</Divider>
          <Item>
            {result.genres
              ? result.genres.length > 0
                ? result.genres.map((genre, index) =>
                    index + 1 === result.genres.length
                      ? genre.name
                      : `${genre.name}, `
                  )
                : "TBA"
              : "TBA"}
          </Item>
          <Divider>&nbsp;•&nbsp;</Divider>
          <Item>
            {result.production_countries
              ? result.production_countries.length > 0
                ? result.production_countries.map((country, index) =>
                    index + 1 === result.production_countries.length
                      ? country.name
                      : `${country.name}, `
                  )
                : "TBA"
              : "TBA"}
          </Item>
        </ItemContainer>
        <Overview className="Overview">{result.overview}</Overview>
      </Data>
      {error && <Message text={error} color="red" />}
    </Container>
  );

export default DetailMain;
