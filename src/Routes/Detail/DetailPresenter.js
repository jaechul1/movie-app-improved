import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import DetailMain from "../../Components/DetailMain";
import DetailCast from "../../Components/DetailCast";
import Loader from "../../Components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContainer = styled.div`
  overflow-y: hidden;
`;

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

const DetailPresenter = ({
  result,
  cast,
  crew,
  error,
  loading,
  titleUpdater,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrow: true,
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Slider {...settings}>
        <MainContainer>
          <DetailMain
            result={result}
            error={error}
            loading={loading}
            titleUpdater={titleUpdater}
          />
        </MainContainer>
        {console.log(cast, crew)}
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
