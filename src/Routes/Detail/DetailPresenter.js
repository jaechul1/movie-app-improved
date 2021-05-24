import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import DetailMain from "../../Components/DetailMain";
import DetailCast from "../../Components/DetailCast";
import Loader from "../../Components/Loader";
import YoutubeEmbed from "../../Components/YoutubeEmbed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  opacity: 0.3;
  position: fixed;
  filter: blur(1px);
`;

const I = styled.i`
  font-size: 3vw;
  position: fixed;
  top: 50vh;
  left: ${(props) => (props.className.includes("left") ? "1vw" : "default")};
  right: ${(props) => (props.className.includes("right") ? "1vw" : "default")};
  cursor: pointer;
  z-index: 2;
`;

const LeftArrow = (props) => {
  return (
    <div onClick={props.onClick}>
      <I className="fas fa-chevron-left"></I>
    </div>
  );
};

const RightArrow = (props) => {
  return (
    <div onClick={props.onClick}>
      <I className="fas fa-chevron-right"></I>
    </div>
  );
};

const DetailPresenter = ({
  result,
  cast,
  crew,
  error,
  loading,
  titleUpdater,
}) => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    fade: true,
    speed: 1000,
    adaptiveHeight: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Slider ref={slider} {...settings}>
        <div>
          <DetailMain
            result={result}
            error={error}
            loading={loading}
            titleUpdater={titleUpdater}
          />
        </div>
        {result.videos.results && result.videos.results.length > 0 && (
          <div>
            <YoutubeEmbed result={result} />
          </div>
        )}
        {cast && crew && (cast.length > 0 || crew.length > 0) && (
          <div>
            <DetailCast
              result={result}
              cast={cast}
              crew={crew}
              error={error}
              loading={loading}
            />
          </div>
        )}
      </Slider>
    </>
  );
};

export default DetailPresenter;
