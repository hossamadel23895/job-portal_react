import React from "react";
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute

// import React from 'react'
// import { Route, Navigate } from 'react-router-dom'
// import { useGlobalContext } from '../context/appContext'

// const PrivateRoute = ({ children, ...rest }) => {
//   const { user } = useGlobalContext()

//   return (
//     <Route
//       {...rest}
//       render={() => {
//         return user ? children : <Navigate to='/'></Navigate>
//       }}
//     ></Route>
//   )
// }
// export default PrivateRoute
