import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../../actions/index";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return (
      <div>
        {!this.props.isSignedIn && (
          <button className="ui red google button" onClick={this.onSignInClick}>
            <i className="google icon"></i>
            Sign In
          </button>
        )}
        {this.props.isSignedIn && (
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon"></i>
            Sign Out
          </button>
        )}
      </div>
    );
  }
}

const stateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

const dispatchToProps = {
  signIn,
  signOut,
};

export default connect(stateToProps, dispatchToProps)(GoogleAuth);
