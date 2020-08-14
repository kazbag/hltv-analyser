import React from "react";
import Homepage from "./pages/Homepage";
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
            <Route exact path="/" component={Homepage} />
            <Route path="/during" component={Homepage} />
            <Route path="/incoming" component={Homepage} />
            <Route path="/history" component={Homepage} />
            <Route path="/profile" component={Homepage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
