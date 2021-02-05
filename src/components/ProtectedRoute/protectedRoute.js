import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, path, ...props }) => {

  return (
    <Route path={path}>
      {
        props.isLoggedIn ? <Component {...props} /> :
          <Redirect to="/" />
        // <Redirect to={{ pathname: "/", state: { noAuthRedirected: true } }} />
      }
    </Route>
  )
}
export default ProtectedRoute;
