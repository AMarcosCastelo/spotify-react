/* eslint-disable react/prop-types */
'use strict';
import React, { useContext, useEffect } from 'react';
import Routes from './routes';
import { AuthContext } from './store/auth';
import { Redirect } from 'react-router-dom';

const App = ({ location }) => {
  const { userInfo, setUserInfo, setToken } = useContext(AuthContext);
  const { isUserLoggedIn } = userInfo;
  const objUser = localStorage.getItem('objUser');

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
    <>
      {console.log(userInfo)}
      <Routes />
    </>
  );
};

export default App;
