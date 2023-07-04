// src/components/AuthenticatedRoute.js

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ element, isAuthenticated,path}) => {
 
    return (
      (isAuthenticated) ? <Outlet/> : <Navigate to='/'/>
    ) 
};
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/login',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />

const mapStateToProps = state => ({
  isAuthenticated: state.login.auth,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
