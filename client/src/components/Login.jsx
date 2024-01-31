import React, { useEffect, useState } from "react";
import { setIsAuthenticated } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.errorMessage);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  const authHandler = (e) => {
    e.preventDefault();
    dispatch(
      setIsAuthenticated({
        userName,
        password,
      })
    );
  };

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem("user", JSON.stringify({ isAuth, userName }));
      navigate("/");
    }
  }, [isAuth]);

  return (
    <form class="max-w-sm mx-auto mt-20 h-full">
      <div class="mb-5 mx-3">
        <input
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>
      <div class="mb-5 mx-3">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className=" border border-borderLight text-[#252b3bc9] text-sm block w-full p-2.5"
        />
      </div>

      <div className="flex justify-between mx-3 items-center pt-5">
        <button
          onClick={authHandler}
          type="submit"
          className="text-sm font-semibold bg-primaryYellow px-6 py-2 rounded-sm self-end"
        >
          Login
        </button>
        {error && <div className="text-[#fe0000] text-sm">{error}</div>}
        {/* {result && <div className="text-[#2eae3a] text-sm">{result}</div>} */}
      </div>
    </form>
  );
};
