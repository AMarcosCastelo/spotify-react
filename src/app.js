/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
'use strict';
import React, { useContext, useEffect, createContext } from 'react';
import { Redirect } from 'react-router-dom';
import Routes from './routes';
import { AuthContext } from './store/auth';

const AppContext = createContext();

const App = ({ location }) => {
  const { userInfo, setUserInfo, setToken } = useContext(AuthContext);
  const { isUserLoggedIn } = userInfo;
  const objUser = localStorage.getItem('objUser');

  const useLoading = () => (
    <div className="useLoading">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  useEffect(() => {
    if (location.hash !== '') {
      setToken();
    } else {
      if (objUser) {
        setUserInfo({
          isUserLoggedIn: true,
          user: JSON.parse(objUser)
        });
      }
    }
  }, []);

  if (isUserLoggedIn) {
    if (location.pathname === '/Login') {
      return <Redirect to="/Home" />;
    }
  } else if (location.pathname !== '/Login') {
    return <Redirect to="/Login" />;
  }

  return (
    <AppContext.Provider
      value={{
        useLoading
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
};

export { App, AppContext };
