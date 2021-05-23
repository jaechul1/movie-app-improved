import React, { useState, useEffect } from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../api";
import useTitle from "../../Hooks/useTitle";

const Movies = () => {
  useTitle("Movies | MAI");
  const [np, setNp] = useState(null);
  const [uc, setUc] = useState(null);
  const [tr, setTr] = useState(null);
  const [er, setEr] = useState(null);
  const [ld, setLd] = useState(true);
  const getResults = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcomingCand },
      } = await moviesApi.upcoming();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();
      const nowPlayingTitles = nowPlaying.map((movie) => movie.title);
      const upcoming = upcomingCand.filter(
        (movie) => !nowPlayingTitles.includes(movie.title)
      );
      setNp(nowPlaying);
      setUc(upcoming);
      setTr(topRated);
    } catch {
      setEr("Movies Error");
    } finally {
      setLd(false);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  return (
    <MoviesPresenter
      nowPlaying={np}
      upcoming={uc}
      topRated={tr}
      error={er}
      loading={ld}
    />
  );
};

export default Movies;
