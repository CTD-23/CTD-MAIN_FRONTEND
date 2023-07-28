import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../utils/apis"

const NavBar = () => {

  const userLogout = () => {
    const userEmail = localStorage.getItem("userEmail")
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");

    const logoutEndpoint = "/api/logout/"

    const logoutPayload = {"email" : userEmail}
    axiosInstance.get(logoutEndpoint, logoutPayload)
    .then((resposne)=>{
      console.log(resposne.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const handleLogout = (e) =>{
    userLogout();
  }
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navb navbar-dark text-light p-sm-1 p-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/rFvmtXSY/pisb.png"
              alt=""
              class="img-style"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item text-light mx-2">
                <NavLink
                  to="/"
                  className="text-decoration-none nav-link"
                >
                  Home
                </NavLink>
              </li>

              <li class="nav-item text-light mx-2">
                <NavLink
                  to="/events"
                  className="text-decoration-none nav-link"
                >
                  Events
                </NavLink>
              </li>

              <li class="nav-item text-light mx-2">
                <NavLink
                  to="/aboutus"
                  className="text-decoration-none nav-link"
                >
                  About Us
                </NavLink>
              </li>

              <li class="nav-item text-light mx-2">
                <NavLink
                  to="/contactus"
                  className="text-decoration-none nav-link"
                >
                  Contact Us
                </NavLink>
              </li>

              <li class="nav-item text-light mx-2">
                <NavLink
                  to="/login"
                  className="text-decoration-none nav-link"
                >
                  Login
                </NavLink>
              </li>

              <li class="nav-item text-light mx-2" onClick={handleLogout}>
                <NavLink
                  to="/login"
                  className="text-decoration-none nav-link"
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
