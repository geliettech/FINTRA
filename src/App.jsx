// import { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router";
// import LandingPage from "./pages/landing";
// import SignIn from "./pages/auth/signIn";
// import Dashboard from "./pages/dashboard";
// import { AuthProvider } from "./Layout/AuthProvider";
// import RequireAuth from "./Layout/RequireAuth";
// import NotFound from "./pages/not-found";


// function App() {
//   return (
//     <AuthProvider className="App">
//       <Router>
//         <Routes>
//           <Route path="/" exact element={<LandingPage />} />
//           <Route path="/sign-in" element={<SignIn />} />
//           <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
//           <Route path="/*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";

import LandingPage from "./pages/landing";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/not-found";

import { AuthProvider } from "./Layout/AuthProvider";
import RequireAuth from "./Layout/RequireAuth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<LandingPage />}
            />

            <Route
              path="/sign-in"
              element={<SignIn />}
            />

            <Route
              path="/sign-up"
              element={<SignUp />}
            />

            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;