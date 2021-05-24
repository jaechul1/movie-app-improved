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

const DetailCast = ({ result, cast, crew, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        {cast.length > 0 && (
          <Section title={"Production"}>
            {result.production_companies.map((company) => (
              <Poster
                key={company.id + Date.now()}
                id={company.id}
                imageUrl={company.logo_path}
                title={company.name}
                year={company.origin_country}
                isMovie={false}
                isPerson={true}
                isCompany={true}
              />
            ))}
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
