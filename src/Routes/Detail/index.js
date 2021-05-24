import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { tvshowsApi, moviesApi } from "../../api";
import useTitle from "../../Hooks/useTitle";
import uniqBy from "lodash.uniqby";

const Detail = ({
  location: { pathname },
  history: { push },
  match: {
    params: { id },
  },
}) => {
  const titleUpdater = useTitle("Loading | MAI");
  const [rs, setRs] = useState(null);
  const [cs, setCs] = useState(null);
  const [cr, setCr] = useState(null);
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
        const {
          data: { cast, crew },
        } = await moviesApi.movieCredits(parsedId);
        setRs(result);
        setCs(uniqBy(cast, "name"));
        setCr(uniqBy(crew, "name"));
      } else {
        const { data: result } = await tvshowsApi.tvshowDetail(parsedId);
        const {
          data: { cast, crew },
        } = await tvshowsApi.tvshowCredits(parsedId);
        setRs(result);
        setCs(uniqBy(cast, "name"));
        setCr(uniqBy(crew, "name"));
      }
    } catch {
      setEr("Detail Error");
    } finally {
      setLd(false);
    }
  };
  useEffect(() => {
    getResults();
    // eslint-disable-next-line
  }, []);
  return (
    <DetailPresenter
      result={rs}
      cast={cs}
      crew={cr}
      error={er}
      loading={ld}
      titleUpdater={titleUpdater}
    />
  );
};

export default Detail;
