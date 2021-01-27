import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, path, ...props }) => {
  // console.log({ ...props });
  // console.log(typeof (path));
  return (
    <Route path={path}>
      {
        props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  )
}
export default ProtectedRoute;
