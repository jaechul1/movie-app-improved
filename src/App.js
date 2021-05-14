import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import TV from "./Routes/TV";
import Movies from "./Routes/Movies";
import Search from "./Routes/Search";
import GlobalStyles from "./Components/GlobalStyles";

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
