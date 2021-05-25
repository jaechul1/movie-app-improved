import React from "react";
import styled from "styled-components";
import Loader from "./Loader";
import Message from "./Message";
import Section from "./Section";
import Poster from "./Poster";

const Container = styled.div``;

const Content = styled.div`
  padding: 5vh 3vw 0 3vw;
`;

const Company = styled.div`
  font-size: 1.5vw;
  color: rgba(255, 255, 255, 0.5);
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Img = styled.img`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 1vh 1vw 1vh 1vw;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const DetailCast = ({ result, cast, crew, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        {result.production_companies.length > 0 && (
          <Section title={"Production"} isCompany={true}>
            {result.production_companies.map((company) =>
              company.logo_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                  alt={company.name}
                  width="300"
                />
              ) : (
                <Company className="Company">{company.name}</Company>
              )
            )}
          </Section>
        )}
        {cast.length > 0 && (
          <Section title={"Acting"}>
            {cast.map((person) => (
              <Poster
                key={person.id + Date.now()}
                id={person.id}
                imageUrl={person.profile_path}
                title={person.name}
                year={person.character}
                isMovie={false}
                isPerson={true}
              />
            ))}
          </Section>
        )}
        {crew.length > 0 && (
          <Section title={"Makers"}>
            {crew.map((person) => (
              <Poster
                key={person.id + Date.now()}
                id={person.id}
                imageUrl={person.profile_path}
                title={person.name}
                year={person.job}
                isMovie={false}
                isPerson={true}
              />
            ))}
          </Section>
        )}
      </Content>
      {error && <Message text={error} color="red" />}
    </Container>
  );

export default DetailCast;
