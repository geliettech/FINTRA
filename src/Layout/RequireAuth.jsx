// import React from "react";
// import { Navigate, useLocation } from "react-router";
// import { useAuth } from "./AuthProvider";

// const RequireAuth = ({ children }) => {
//   const location = useLocation();
//   const auth = useAuth();

//   if (!auth.user) {
//     return <Navigate to="/login" state={{ path: location.pathname }} />;
//   }

//   return <div>{children}</div>;
// };

// export default RequireAuth;
import { Navigate } from "react-router";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const RequireAuth = ({ children }) => {
  const { isAuth } = useGetUserInfo();

  return isAuth ? children : <Navigate to="/sign-in" />;
};

export default RequireAuth;