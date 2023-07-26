import React from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    Username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //    console.log(formData,"<-This is FormData");
    const loginPayload = {
      Username: formData.Username,
      password: formData.password,
    };
    
    const instance = axios.create({
        baseURL: 'http://localhost:4000/',
      });
      
      // Later, use the 'instance' to make requests
    console.log(loginPayload);
    instance
      .post("/api/login", loginPayload)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                value={formData.Username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF44E;  Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
                onClick={handleSubmit}
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
