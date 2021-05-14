import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvshowsApi, moviesApi } from "../../api";

class SearchContainer extends React.Component {
  state = {
    tvshowResults: null,
    movieResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  async handleSearch() {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.setState({ loading: true });
      try {
        const {
          data: { results: tvshowResults },
        } = tvshowsApi.search(searchTerm);
        const {
          data: { results: movieResults },
        } = moviesApi.search(searchTerm);
        this.setState(tvshowResults, movieResults);
      } catch {
        this.setState({ error: "Search Error" });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { tvshowResults, movieResults, searchTerm, error, loading } =
      this.state;
    return (
      <SearchPresenter
        tvshowResults={tvshowResults}
        movieResults={movieResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default SearchContainer;
