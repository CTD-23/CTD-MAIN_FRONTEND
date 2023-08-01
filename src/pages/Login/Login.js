import React, { useCallback, useContext } from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import axiosInstance from "../../utils/apis";
import { useNavigate } from "react-router";
import DataContext from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";
const Login = () => {
  const { loginState, setLoginState } = useContext(DataContext);

  const defaultCredentials = {
    Username: "",
    password: "",
  }
  const [loginCredentials, setLoginCredentials] = useState(defaultCredentials)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setLoginCredentials({ ...loginCredentials, [name]: value });
  }

  const navigate = useNavigate();
  const loginUser = (loginPayload) => {
    const loginEndpoint = "/api/login";
    axiosInstance.post(loginEndpoint, loginPayload)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userEmail", response.data.user.email)
          alert("Login successful");
          setLoginState(true);
          navigate("/");
        }
        else {
          console.log("login failed");
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
        setLoginCredentials(defaultCredentials)
      })
  }

  const submitLoginForm = (e) => {
    e.preventDefault();
    loginUser(loginCredentials);

  }

  const defaultEmail = {
    email: "",
  }
  const [userEmail, setUserEmail] = useState(defaultEmail);
  const handleEmailChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserEmail({
      ...userEmail, [name]: value,
    })
  }
  const sendLink = (userEmail) => {
    const forgetPassEndpt = "/api/password/forget/"

    axiosInstance.post(forgetPassEndpt, userEmail)
      .then((response) => {
        alert(response.data.message);
        navigate("/login")
        document.getElementsByClassName("closebtn")[0].click();
      })
      .catch((error) => {
        alert(error.response.data.error);
      })
  }

  const handleForgotPassword = (e) => {
    sendLink(userEmail)
  }


  return (
    <div>

      <div className="mt-sm-5 mt-0">
        <div className="container cont text-white p-4 p-sm-3 log-style">
          <form onSubmit={submitLoginForm}>
            <div className="title mb-4 text-center">
              <h1>Sign in</h1>
              <small>We are happy to have you back.</small>
            </div>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF32C;  Email address"
                name="Username"
                onChange={handleChange}
                value={loginCredentials.Username}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF44E;  Password"
                name="password"
                onChange={handleChange}
                value={loginCredentials.password}
              />
            </div>

            <div className="input-group mb-3 d-flex justify-content-between">
              <div>
                <small>
                  <a href="#" className="forgot hover-link" data-bs-toggle="modal" data-bs-target="#resetPasswordModal">
                    Forgot Password?
                  </a>
                </small>
              </div>
            </div>
            <div className="input-group mb-4">
              <button
                className="btn btn-lg btn1 w-100 fs-6"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="row forgot mt-0">
              <small className="d-flex">
                <span>
                Don't have account?{" "}
                </span>
                <span>
                <NavLink
                  to="/register"
                  className="text-decoration-none"
                >
                  <span href="#" className="forgot-signup hover-link mx-2">
                    {" "}Sign Up
                  </span>
                </NavLink>
                </span>
              </small>
            </div>
          </form>
        </div>
      </div>

      <div class="modal fade resePasswordModal" id="resetPasswordModal" tabindex="-1" aria-labelledby="resetPasswordModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h5 class="modal-title" id="resetPasswordModalLabel">Reset Password</h5>
              <button type="button" class="btn-close closebtn" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="emailInput " class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" onChange={handleEmailChange} name="email" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={handleForgotPassword}>Send Link</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
