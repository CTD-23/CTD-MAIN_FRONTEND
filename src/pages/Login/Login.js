import React from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {

  return (
    <div>
      <div className="mt-sm-5 mt-0">
        <div className="container cont text-white p-4 p-sm-4 mt-sm-0 log-style">
          <form>
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
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF44E;  Password"
                name="password"
              />
            </div>

            <div className="input-group mb-3 d-flex justify-content-between">
              <div>
                <small>
                  <a href="#" className="forgot hover-link">
                    Forgot Password?
                  </a>
                </small>
              </div>
            </div>
            <div className="input-group mb-4">
              <button
                className="btn btn-lg w-100 fs-6"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="row forgot">
              <small>
                Don't have account?{" "}
                <a href="#" className="forgot-signup hover-link">
                  Sign Up
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
