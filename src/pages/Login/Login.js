import React, { useCallback, useContext, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import axiosInstance from "../../utils/apis";
import { useNavigate } from "react-router";
import DataContext from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify';

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
    const id = toast.loading("Please wait...");
    const loginEndpoint = "/api/login";

    setTimeout(() => {

    
    axiosInstance.post(loginEndpoint, loginPayload)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userEmail", response.data.user.email)
          setLoginState(true);
          navigate("/");
          toast.update(id, { render: "Logged in successfully !", type: "success", isLoading: false, autoClose:3000 })
        }
        else {
          console.log("login failed");
        }
      })
      .catch((error) => {
        toast.update(id, { render: error.response.data.error, type: "error", isLoading: false, autoClose:3000 })
        setLoginCredentials(defaultCredentials)
      })

    }, 1000)

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
    const id = toast.loading("Please wait...");
    const forgetPassEndpt = "/api/password/forget/"

    setTimeout(()=>{
      axiosInstance.post(forgetPassEndpt, userEmail)
      .then((response) => {
        navigate("/login")
        document.getElementsByClassName("closebtn")[0].click();
        toast.update(id, { render: response.data.message, type: "success", isLoading: false, autoClose:3000 })
      })
      .catch((error) => {
        toast.update(id, { render: error.response.data.error, type: "error", isLoading: false, autoClose:3000 })
        setUserEmail(defaultEmail)
      })
    }, 1000)
    
  }

  const handleForgotPassword = (e) => {
    sendLink(userEmail)
  }

  return (
    <div className="fade-in">

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
            <div className="input-group mb-3">
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
        <div className="container p-3">
        <div class="modal fade resetPasswordModal" id="resetPasswordModal" tabindex="-1" aria-labelledby="resetPasswordModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h5 class="modal-title" id="resetPasswordModalLabel">Reset Password</h5>
              <a class="close bg-none dark text-white" data-bs-dismiss="modal"
                aria-label="Close"><span aria-hidden="true" class="closebtn" >&#xF659;</span></a>
            </div>
            <div class="modal-body">
              <div class="">
                <label for="emailInput " class="form-label">Email address</label>
                <input type="email" class="form-control input-style" id="emailInput" placeholder="" onChange={handleEmailChange} name="email"value={userEmail.email} />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={handleForgotPassword}>Send Link</button>
            </div>
          </div>
        </div>
        </div>
      </div>


      </div>


    </div>
  );
};

export default Login;
