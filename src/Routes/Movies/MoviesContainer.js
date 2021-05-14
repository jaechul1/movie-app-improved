import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../api";

class MoviesContainer extends React.Component {
  state = {
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      this.setState({ popular });
      console.log(this.state);
    } catch {
      this.setState({
        error: "Movies Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { popular, error, loading } = this.state;
    return (
      <MoviesPresenter popular={popular} error={error} loading={loading} />
    );
  }
}

export default MoviesContainer;
