import React, { useState } from "react";
import "./register.css";
import axiosInstance from "../../utils/apis";
import { useNavigate } from "react-router";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";
const Register = () => {
  const { loginState, setLoginState } = useContext(DataContext);
  // const [isJunior,setIsJunior] = useState(false);
  const defaultDetails = {
    first_name: "",
    last_name: "",
    Username: "",
    email: "",
    reg_id: "",
    password: "",
    isJunior: false,
  };



  const [userDetails, setUserDetails] = useState(defaultDetails);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    setUserDetails({ ...userDetails, [name]: value });

    if (name === 'isJunior') {
      setUserDetails({ ...userDetails, [name]: checked });
    }
    // e.tagrget==='isJunior'?
    // if(e.target.type=='checkbox') {

    //     setUserDetails({ ...userDetails, [name]: checked });

    // }
    // else{
    //     setUserDetails({ ...userDetails, [name]: value });
    // }

    // if('value' in e.target) {
    // this.setState({ [event.target.name]: event.target.value});

    // }

    // e.target.checked?setIsJunior(true):setIsJunior(false);

    // console.log(e.target.checked);

  };

  const navigate = useNavigate();

  const registerUser = (details) => {
    const registerEndpoint = "/api/register";
    axiosInstance
      .post(registerEndpoint, details)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("userEmail", response.data.email);
          alert("Registration successful");
          setLoginState(true);
          navigate("/");
        } else {
          alert("Registration failed");
          setUserDetails(defaultDetails);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(userDetails);
    registerUser(userDetails);
  };

  // const handleCategoryChange = (e) =>{
  //   if(e.target.name == "junior"){
  //     setUserDetails({...userDetails, ["isJunior"]:true});
  //   }
  //   else{
  //     setUserDetails({...userDetails, ["isJunior"] : false})
  //   }
  // }

  return (
    <div>
      <div className="mt-sm-2 mt-0 p-sm-0 p-sm-1 mb-5">
        <div className="container cont text-white p-4 p-sm-3 mt-sm-0 log-style">
          <form onSubmit={submitDetails}>
            <div className="title mb-sm-2 mb-3 text-center">
              <h1>Sign up &#xF4DD;</h1>
              <small className="d-none">
                Will be delightful to have you on board.
              </small>
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4C8;  First Name"
                name="first_name"
                value={userDetails.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4C8;  Last Name"
                name="last_name"
                value={userDetails.last_name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4DA;  Username"
                name="Username"
                value={userDetails.Username}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-2">
              <input
                type="email"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF32C;  Email address"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF4CF;  Reg. Id"
                name="reg_id"
                value={userDetails.reg_id}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-2">
              <input
                type="password"
                className="form-control form-control-lg fs-6 input-style"
                placeholder="&#xF44E;  Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                checked
              />
            </div>

            {/* <div className="form-check"> 
              <label>Category : </label>
              <div class="form-check mx-5 ms-5">
                <input class="form-check-input" type="radio" id="flexRadioDefault1" name="isJunior" onClick={handleChange}/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Junior
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="radio" name="isJunior" id="flexRadioDefault2"  onClick={handleChange}/>
                <label class="form-check-label" for="flexRadioDefault2">
                  Senior
                </label>
              </div>

            </div> */}

            <div className="input-group mb-2">
              <small>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="isJunior"
                    value=""
                    id="flexCheckDefault"
                    onClick={handleChange}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Junior
                  </label>
                </div>
              </small>
              <button className="btn btn-lg w-100 rounded-2 fs-6 btn1 text-light">
                Register &#xF4DD;
              </button>
            </div>
            <div className="row forgot">
              <small className="d-flex">
                <p>
                Already a user?{" "}
                </p>
                <p>
                <NavLink
                  to="/login"
                  className="text-decoration-none"
                >
                  <p href="#" className="forgot-signup hover-link mx-2">
                    {" "}Sign In
                  </p>
                </NavLink>
                </p>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
