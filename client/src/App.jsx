import { useState } from "react";
import "./App.css";
import { Content, EditItem, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { AddItem } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:productId" element={<EditItem />} />
      </Routes>
    </>
  );
}

export default App;
