import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../utils/apis"
import DataContext from "../../contexts/DataContext";
const NavBar = () => {

  const {loginState, setLoginState} = useContext(DataContext)
  const userLogout = () => {
    const userEmail = localStorage.getItem("userEmail")
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");

    const logoutEndpoint = "/api/logout/"

    const logoutPayload = {"email" : userEmail}
    axiosInstance.get(logoutEndpoint, logoutPayload)
    .then((resposne)=>{
      console.log(resposne.data)
      setLoginState(false)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const handleLogout = (e) =>{
    userLogout();
  }

  const hidingcss = "d-none";
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navb navbar-dark text-light p-sm-2 p-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://i.postimg.cc/rFvmtXSY/pisb.png"
              alt=""
              className="img-style"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav ms-auto">
              <li className="nav-item text-light mx-2">
                
                <NavLink
                  to="/"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/events"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Events
                </NavLink>
              </li>

              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/aboutus"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item text-light mx-2">
                <NavLink
                  to="/contactus"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Contact Us
                </NavLink>
              </li>

              <li className={`nav-item text-light mx-2 ${loginState ? hidingcss : ""}`}>
                <NavLink
                  to="/login"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Login
                </NavLink>
              </li>

              <li className={`nav-item text-light mx-2 ${!loginState ? hidingcss : ""}`}
              onClick={handleLogout}>
                <NavLink
                  to="/login"
                  className="text-decoration-none nav-link w-100 navitem"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
