import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./global/styles.css";

const App = () => {
  return (
    <StyledApp>
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
    </StyledApp>
  );
};

const StyledApp = styled.div``;

export default App;
