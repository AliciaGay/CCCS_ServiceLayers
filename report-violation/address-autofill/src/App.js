import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Portal from "./Portal";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setUserSession, resetUserSession } from "./service/AuthService";
import axios from "axios";
import image from './logo.png';


const verifyTokenAPIURL = 'https://cgsaeh7sui.execute-api.us-east-1.amazonaws.com/prod/verify';

function App(props) {

  const [isAuthenicating, setAuthenicating] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': 'E7LYepLR8hal3tqZ6XzAn5VPyIjuqty79zV1Au6V'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenAPIURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuthenicating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenicating(false);
    })
  }, []);

  const token = getToken();
  if (isAuthenicating && token) {
    return <div className="content">Authenicating...</div>
  };

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }

  return (
    <div className="App">
      <BrowserRouter>
          <div className="header">
            <a href="https://www.communitycompliancecontrolsystems.com" target="_blank" rel="noreferrer">
              <img src={image} height={75} width={75} alt ="logo"></img>
            </a>
        <NavLink exact activeClassName="active" to="/">Register</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/portal">Portal</NavLink>
      <input type="button" value="Logout" onClick={logoutHandler} />
      </div>
      <div className="content">
        <Switch>
          <Route path="/CCCS" element={<CCCS/>} />
          <PublicRoute exact path="/" component={Register}/>
          <PublicRoute path="/login" component={Login}/>
          <PrivateRoute path="/portal" component={Portal}/>
        </Switch>
      </div>
      </BrowserRouter>
    </div>


  );

  function CCCS() {
    window.location.replace('https://communitycompliancecontrolsystems.com');

    return null;
  }
}

export default App;