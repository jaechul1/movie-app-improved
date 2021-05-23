import React, { useState, useEffect } from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../api";

const Movies = () => {
  const [pp, setPp] = useState(null);
  const [tr, setTr] = useState(null);
  const [er, setEr] = useState(null);
  const [ld, setLd] = useState(true);
  const getResults = async () => {
    try {
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();
      setPp(popular);
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
  return <MoviesPresenter popular={pp} topRated={tr} error={er} loading={ld} />;
};

export default Movies;
