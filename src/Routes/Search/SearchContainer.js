import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component {
  state = {
    tvResults: null,
    movieResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  render() {
    const { tvResults, movieResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        tvResults={tvResults}
        movieResults={movieResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}

export default SearchContainer;
