import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  height: 18vw;
  border-radius: 10%;
  background-position: center center;
  transition: opacity 0.2s linear;
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
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 0.5vh;
`;

const Year = styled.span`
  display: block;
  opacity: 0.4;
`;

const SLink = styled(Link)`
  cursor: ${(props) => (props.isPerson ? "default" : "pointer")};
`;

const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
  isPerson,
  isCompany,
}) => {
  return (
    <SLink
      isPerson={isPerson}
      to={isPerson ? null : isMovie ? `/movie/${id}` : `tvshow/${id}`}
    >
      <Container>
        <ImageContainer isPerson={isPerson}>
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : isCompany
                ? require("../assets/company.jpg").default
                : isPerson
                ? require("../assets/person.png").default
                : require("../assets/noPoster.jpg").default
            }
          />
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

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
