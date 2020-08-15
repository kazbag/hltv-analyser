import React from "react";
import Homepage from "./pages/Homepage";
import AllMatches from "./pages/AllMatches";
import LiveMatches from "./pages/LiveMatches";
import OfflineMatches from "./pages/OfflineMatches";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/styles/main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AllMatches} />
            <Route path="/matches/live" component={LiveMatches} />
            <Route path="/matches/upcoming" component={OfflineMatches} />
            <Route path="/matches/history" component={Homepage} />
            <Route path="/profile" component={Homepage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
