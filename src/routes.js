import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { UserContext } from "./global/UserContext";

import App from "./App";
import AuthForm from "./Components/forms";

const Routes = () => {
  console.log("Inside the route componentt");
  return (
    <Router>
      <Switch>
        <Route path="/auth" exact component={AuthForm} />
        <PrivateRoute path="/" exact component={App} />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
            }}
          />
        )
      }
    ></Route>
  );
};

export default Routes;
