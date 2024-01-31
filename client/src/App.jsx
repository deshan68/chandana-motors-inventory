import { useEffect, useState } from "react";
import "./App.css";
import { Content, EditItem, Navbar } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddItem } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "./slices/authSlice";
import { Login } from "./components/Login";

function App() {
  let isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Content /> : <Navigate to={"/login"} />}
        />
        <Route path={"/login"} element={<Login />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:productId" element={<EditItem />} />
      </Routes>
    </>
  );
}

export default App;
