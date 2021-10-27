import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import React, { useContext } from "react";
import Search from "./components/search/Search";
import Track from "./components/track/Track";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={(routerProps) => <Home />} />
          <Route
            path="/search/:Squery"
            exact
            render={(routerProps) => <Search {...routerProps} />}
          />
          <Route
            path="/track/:trackId"
            exact
            render={(routerProps) => <Track {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
