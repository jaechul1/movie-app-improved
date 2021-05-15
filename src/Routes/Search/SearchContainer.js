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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.setState({ loading: true });
      try {
        const {
          data: { results: tvshowResults },
        } = await tvshowsApi.search(searchTerm);
        const {
          data: { results: movieResults },
        } = await moviesApi.search(searchTerm);
        this.setState({ tvshowResults, movieResults });
      } catch {
        this.setState({ error: "Search Error" });
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

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
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}

export default SearchContainer;
