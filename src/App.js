import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./hooks/UserContext";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="user/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
