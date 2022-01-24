import React from "react";
import { Link } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streams
      </Link>
      <div className="right menu">
        <Link to="/streams/edit" className="item">
          Streams Edit
        </Link>
      </div>
    </div>
  );
};

export default Header;
