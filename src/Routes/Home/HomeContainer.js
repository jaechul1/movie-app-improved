import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null /* movies */,
    upcoming: null /* movies */,
    airingToday: null /* tv */,
    error: null,
    loading: true,
  };

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
