import React, { useState, useEffect } from "react";
import TVShowsPresenter from "./TVShowsPresenter";
import { tvshowsApi } from "../../api";

const TVShows = () => {
  const [tr, setTr] = useState(null);
  const [pp, setPp] = useState(null);
  const [er, setEr] = useState(null);
  const [ld, setLd] = useState(true);
  const getResults = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvshowsApi.topRated();
      const {
        data: { results: popular },
      } = await tvshowsApi.popular();
      setTr(topRated);
      setPp(popular);
    } catch {
      setEr("TV Shows Error");
    } finally {
      setLd(false);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  return (
    <TVShowsPresenter topRated={tr} popular={pp} error={er} loading={ld} />
  );
};

export default TVShows;
