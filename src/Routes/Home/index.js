import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { tvshowsApi, moviesApi } from "../../api";

const Home = () => {
  const [np, setNp] = useState(null);
  const [uc, setUc] = useState(null);
  const [at, setAt] = useState(null);
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
        data: { results: airingToday },
      } = await tvshowsApi.airingToday();
      const nowPlayingTitles = nowPlaying.map((movie) => movie.title);
      const upcoming = upcomingCand.filter(
        (movie) => !nowPlayingTitles.includes(movie.title)
      );
      setNp(nowPlaying);
      setUc(upcoming);
      setAt(airingToday);
    } catch {
      setEr("Home Error");
    } finally {
      setLd(false);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  return (
    <HomePresenter
      nowPlaying={np}
      upcoming={uc}
      airingToday={at}
      Error={er}
      Loading={ld}
    />
  );
};

export default Home;
