import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import StreamCreate from "../streams/StreamCreate";
import StreamDelete from "../streams/StreamDelete";
import StreamEdit from "../streams/StreamEdit";
import StreamList from "../streams/StreamList";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/create" exact component={StreamCreate}></Route>
        <Route path="/streams/edit" exact component={StreamEdit}></Route>
        <Route path="/streams/delete" exact component={StreamDelete}></Route>
      </Router>
    </div>
  );
};

export default App;
