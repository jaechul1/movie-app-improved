import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  border-radius: 10%;
  background-position: center center;
  transition: opacity 0.2s linear;
  margin-bottom: 10px;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 1vh;
  right: 0.5vw;
  color: #e4bb24;
  opacity: 0;
  transition: opacity 0.2s linear;
  font-size: 1.7vw;
  display: ${(props) => (props.isPerson ? "none" : "default")};
`;

const Title = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const Year = styled.span`
  display: block;
  opacity: 0.4;
`;

const SLink = styled(Link)`
  cursor: ${(props) => (props.isPerson ? "default" : "pointer")};
`;

const Rank = styled.div`
  position: absolute;
  top: 0.5vh;
  left: 0.8vw;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 10px 10px 5px;
  border-radius: 20%;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 1vh;
  &:hover {
    ${Image} {
      opacity: ${(props) => (props.isPerson ? 1 : 0.3)};
    }
    ${Rating} {
      opacity: 0.8;
    }
    ${Rank} {
      display: none;
    }
  }
`;

const Prefix = styled.span`
  font-size: 2.5vw;
`;

const Number = styled.span`
  font-size: 2vw;
`;

const Poster = ({
  rank,
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
  isPerson = false,
  isCompany = false,
  isTrending = false,
  isSection = false,
}) => {
  return (
    <SLink
      isPerson={isPerson}
      to={isPerson ? null : isMovie ? `/movie/${id}` : `/tvshow/${id}`}
    >
      <Container>
        <ImageContainer isPerson={isPerson}>
          <Image
            className="thumbnail"
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : isCompany
                ? require("../assets/company.jpg").default
                : isPerson
                ? isSection
                  ? require("../assets/noPoster.jpg").default
                  : require("../assets/person.png").default
                : require("../assets/noPoster.jpg").default
            }
          />
          {isTrending && (
            <Rank>
              <Prefix>#</Prefix>
              <Number>{rank}</Number>
            </Rank>
          )}
          <Rating isPerson={isPerson}>
            <i className="fas fa-star"></i>&nbsp;{rating}/10
          </Rating>
        </ImageContainer>
        <Title>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Title>
        {year && <Year>{year}</Year>}
      </Container>
    </SLink>
  );
};

export default Poster;
