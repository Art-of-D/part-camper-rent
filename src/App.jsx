import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import { CommonLayout } from "./components/Layout/CommonLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
