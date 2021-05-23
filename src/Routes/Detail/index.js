import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { tvshowsApi, moviesApi } from "../../api";

const Detail = ({
  location: { pathname },
  history: { push },
  match: {
    params: { id },
  },
}) => {
  const [rs, setRs] = useState(null);
  const [er, setEr] = useState(null);
  const [ld, setLd] = useState(true);
  const isMovie = pathname.includes("/movie/");
  const getResults = async () => {
    if (!/^\d+$/.test(id)) {
      return push("/");
    }
    const parsedId = parseInt(id);
    try {
      if (isMovie) {
        const { data: result } = await moviesApi.movieDetail(parsedId);
        setRs(result);
      } else {
        const { data: result } = await tvshowsApi.tvshowDetail(parsedId);
        setRs(result);
      }
    } catch {
      setEr("Detail Error");
    } finally {
      setLd(false);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  return <DetailPresenter result={rs} error={er} loading={ld} />;
};

export default Detail;
