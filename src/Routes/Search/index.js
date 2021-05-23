import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { tvshowsApi, moviesApi } from "../../api";
import useTitle from "../../Hooks/useTitle";

const Search = () => {
  useTitle("Search | MAI");
  const [ts, SetTs] = useState(null);
  const [mv, SetMv] = useState(null);
  const [st, SetSt] = useState("");
  const [er, SetEr] = useState(null);
  const [ld, SetLd] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (st !== "") {
      SetLd(true);
      try {
        const {
          data: { results: tvshowResults },
        } = await tvshowsApi.search(st);
        const {
          data: { results: movieResults },
        } = await moviesApi.search(st);
        SetTs(tvshowResults);
        SetMv(movieResults);
      } catch {
        SetEr("Search Error");
      } finally {
        SetLd(false);
      }
    }
  };
  const updateTerm = (event) => {
    SetSt(event.target.value);
  };
  return (
    <SearchPresenter
      tvshowResults={ts}
      movieResults={mv}
      searchTerm={st}
      error={er}
      loading={ld}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default Search;
