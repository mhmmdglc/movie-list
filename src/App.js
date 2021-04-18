import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
