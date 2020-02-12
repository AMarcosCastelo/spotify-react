/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const Auth = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  });

  const setToken = () => {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e;
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    localStorage.setItem('objUser', JSON.stringify(hashParams));
    setUserInfo({
      isUserLoggedIn: true,
      user: hashParams
    })
  };

  const logIn = () => {
    window.location.href = 'https://accounts.spotify.com/authorize?client_id=3d9f8d37ff1c453696d19b6117cb151f&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2FLogin&scope=user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20user-library-modify%20user-library-read%20user-read-recently-played%20user-top-read';
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        logIn,
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, Auth };
