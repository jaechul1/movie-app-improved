import React, { useState, useEffect } from "react";
import uniqBy from "lodash.uniqby";
import useTitle from "../../Hooks/useTitle";
import { trendingApi } from "../../api";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";
import TrendingPresenter from "./TrendingPresenter";

const Trending = () => {
  useTitle("Trending | MAI");
  const [rs, setRs] = useState([]);
  const [er, setEr] = useState(null);
  const [ld, setLd] = useState(true);
  const page = useInfiniteScroll();
  const getResults = async (somePage) => {
    try {
      const {
        data: { results: newRs },
      } = await trendingApi(somePage);
      const {
        data: { results: newnewRs },
      } = await trendingApi(somePage + 1);
      const filteredRs = uniqBy([...rs, ...newRs, ...newnewRs], "id");
      setRs(filteredRs);
    } catch {
      setEr("Trending Error");
    } finally {
      setLd(false);
    }
  };
  useEffect(() => {
    getResults(page);
    // eslint-disable-next-line
  }, [page]);
  return <TrendingPresenter results={rs} error={er} loading={ld} />;
};

export default Trending;
