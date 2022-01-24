import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

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
      <div className="right menu">
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};

export default Header;
