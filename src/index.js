import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Trending from "./Routes/Trending";
import TVShows from "./Routes/TVShows";
import Movies from "./Routes/Movies";
import Search from "./Routes/Search";
import Detail from "./Routes/Detail";
import GlobalStyles from "./Components/GlobalStyles";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={Trending} />
        <Route path="/tvshows" component={TVShows} />
        <Route path="/movies" component={Movies} />
        <Route path="/search" component={Search} />
        <Route path="/tvshow/:id" component={Detail} />
        <Route path="/movie/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
