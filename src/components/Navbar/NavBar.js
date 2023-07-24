import React from "react";
import "./Navbar.css"
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navb navbar-dark text-light p-sm-1 p-2" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img src="https://i.postimg.cc/rFvmtXSY/pisb.png" alt="" class="img-style" 
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
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item text-light mx-2">
                <a class="nav-link" aria-current="page" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item text-light mx-2">
                <a class="nav-link" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item text-light mx-2">
                <a class="nav-link" aria-current="page" href="#">
                  Contact us
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="#">
                  Login
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
