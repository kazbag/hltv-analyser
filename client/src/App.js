import React from "react";
import Homepage from "./pages/Homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import variables from "./utils/variables";
import "./global/styles.css";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

const StyledApp = styled.div`
  min-height: 100vh;
  background: ${variables.darkColor};
`;

export default App;
