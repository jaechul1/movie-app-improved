import React from "react";
import MoviesPresenter from "./MoviesPresenter";

class MoviesContainer extends React.Component {
  state = {
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { popular, error, loading } = this.state;
    return (
      <MoviesPresenter popular={popular} error={error} loading={loading} />
    );
  }
}

export default MoviesContainer;
