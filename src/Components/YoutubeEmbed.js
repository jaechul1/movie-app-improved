import React from "react";
import styled from "styled-components";

const VideoBox = styled.div`
  padding: 5vh 18vw 0 18vw;
  display: flex;
  flex-direction: column;
  & iframe {
    border-radius: 20px;
    height: 36vw;
    & + iframe {
      margin-top: 5vh;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 2.5vw;
  font-weight: 100;
  margin-bottom: 5vh;
  & iframe {
    margin-top: 3vh;
  }
`;

const YoutubeEmbed = ({ result }) => {
  return (
    <VideoBox>
      {result.videos.results.map((video) => (
        <Title>
          {`-${video.type}-`}
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${result.title || result.name} Embedded`}
          />
        </Title>
      ))}
    </VideoBox>
  );
};

export default YoutubeEmbed;
