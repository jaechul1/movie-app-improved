import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import TV from "./routes/TV";
import Movies from "./routes/Movies";
import Search from "./routes/Search";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/movies" component={Movies} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
