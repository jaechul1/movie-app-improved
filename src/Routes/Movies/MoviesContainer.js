import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../api";

class MoviesContainer extends React.Component {
  state = {
    popular: null,
    topRated: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();
      this.setState({ popular, topRated });
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

  render = () => <MoviesPresenter {...this.state} />;
}

export default MoviesContainer;
