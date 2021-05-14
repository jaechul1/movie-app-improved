import React from "react";
import HomePresenter from "./HomePresenter";
import { tvshowsApi, moviesApi } from "../../api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null /* movies */,
    upcoming: null /* movies */,
    airingToday: null /* tvshows */,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: airingToday },
      } = await tvshowsApi.airingToday();
      this.setState({ nowPlaying, upcoming, airingToday });
    } catch {
      this.setState({
        error: "Home Error",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, airingToday, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
