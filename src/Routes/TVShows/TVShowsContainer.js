import React from "react";
import TVShowsPresenter from "./TVShowsPresenter";
import { tvshowsApi } from "../../api";

class TVShowsContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvshowsApi.topRated();
      const {
        data: { results: popular },
      } = await tvshowsApi.popular();
      this.setState({ topRated, popular });
      console.log(this.state);
    } catch {
      this.setState({
        error: "TV Shows Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, popular, error, loading } = this.state;
    return (
      <TVShowsPresenter
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVShowsContainer;
