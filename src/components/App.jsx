import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
