import React, { useState } from "react";
import "./register.css";
import axiosInstance from "../../utils/apis"
import { useNavigate } from "react-router";
const Register = () => {

    const defaultDetails = {
        first_name : "",
        last_name : "",
        Username : "",
        email : "",
        reg_id : "",
        password : "",
        isJunior : true,
    }

    const [userDetails, setUserDetails] = useState(defaultDetails);

    const handleChange = (e) =>{
        const name = e.target.name ;
        const value = e.target.value;

        setUserDetails({...userDetails, [name]:value});
    }

    const navigate = useNavigate();

    const registerUser = (details) =>{
        const registerEndpoint = "/api/register";
        axiosInstance.post(registerEndpoint, details)
        .then((response)=>{
            if(response.data.success)
            {
                localStorage.setItem("isLogin", true);
                localStorage.setItem("userEmail", response.data.email)
                alert("Registration successful")
                navigate("/")
            }
            else{
                alert("Registration failed")
                setUserDetails(defaultDetails);
            }
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    
    const submitDetails = (e) =>{
        e.preventDefault();
        console.log(userDetails);
        registerUser(userDetails);
    }

  return (
    <div>
      <div className="mt-sm-2 mt-0 p-sm-0 p-sm-1">
        <div className="container cont text-white p-4 p-sm-3 mt-sm-0 log-style">
          <form onSubmit={submitDetails}>
            <div className="title mb-sm-2 mb-3 text-center">
              <h1>Sign up &#xF4DD;</h1>
              <small className="d-none d-sm-block">
                Will be delightful to have you on board.
              </small>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4C8;  First Name"
                name = "first_name"
                value = {userDetails.first_name}
                onChange = {handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4C8;  Last Name"
                name = "last_name"
                value = {userDetails.last_name}
                onChange = {handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4DA;  Username"
                name = "Username"
                value = {userDetails.Username}
                onChange = {handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF32C;  Email address"
                name = "email"
                value = {userDetails.email}
                onChange = {handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4CF;  Reg. Id"
                name="reg_id"
                value = {userDetails.reg_id}
                onChange = {handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF44E;  Password"
                name ="password"
                value = {userDetails.password}
                onChange = {handleChange}
              />
            </div>

            <div className="input-group mb-2">
              <button className="btn btn-lg w-100 fs-6">
                Register &#xF4DD;
              </button>
            </div>
            <div className="row forgot">
              <small>
                Already a user?{" "}
                <a href="#" className="forgot-signup hover-link">
                  Log in
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
