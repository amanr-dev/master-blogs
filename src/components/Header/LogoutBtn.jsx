import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlices";
import authService from "../../appwrite/auth";
import { FiLogOut } from "react-icons/fi";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      type="button"
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-lg"
      onClick={logoutHandler}
    >
      logout
      <span className="text-slate-700 text-xl ">
        <FiLogOut />
      </span>
    </button>
  );
};

export default LogoutBtn;
