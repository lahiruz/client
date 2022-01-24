import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const PageOne = () => {
  return <div>One</div>;
};

const PageTwo = () => {
  return <div>Two</div>;
};

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={PageOne}></Route>
      <Route path="/two" component={PageTwo}></Route>
    </Router>
  );
};

export default App;
