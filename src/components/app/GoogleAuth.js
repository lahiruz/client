import React, { useEffect, useState} from "react";

const GoogleAuth = () => {
  const [auth, setAuth] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const authChange = () => {
    setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    };

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          const authVal = window.gapi.auth2.getAuthInstance();
          setAuth(authVal);
          setIsSignedIn(authVal.isSignedIn.get());
          authVal.isSignedIn.listen(authChange)
        });
    });
  }, []);


  const signIn = () => {
    auth.signIn();
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      {!isSignedIn && (
        <button className="ui red google button" onClick={signIn}>
          <i className="google icon"></i>
          Sign In
        </button>
      )}
      {isSignedIn && (
        <button className="ui red google button" onClick={signOut}>
          <i className="google icon"></i>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;
