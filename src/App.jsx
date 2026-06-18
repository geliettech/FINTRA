import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import SignIn from "./pages/auth/signIn";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./Layout/AuthProvider";
import RequireAuth from "./Layout/RequireAuth";
import NotFound from "./pages/not-found";


function App() {
  return (
    <AuthProvider className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
