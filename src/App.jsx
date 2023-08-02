import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Homepage} />
        <Route path="/:id" exact Component={DetailPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
