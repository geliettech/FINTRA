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




import { Navigate, useLocation } from "react-router";
import { useAuth } from "./AuthProvider";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user?.isAuth) {
    return (
      <Navigate
        to="/sign-in"
        replace
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
};

export default RequireAuth;