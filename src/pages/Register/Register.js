import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div>

<div className="mt-sm-2 mt-0 p-sm-0 p-sm-1">

<div className="container cont text-white p-4 p-sm-3 mt-sm-0 log-style">
  
    <form>
        <div className="title mb-sm-2 mb-3 text-center">
            <h1>Sign up  &#xF4DD;</h1>
            <small className='d-none d-sm-block'>Will be delightful to have you on board.</small>
            
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control form-control-lg fs-6 input-style" placeholder="&#xF4DA;  Username" />
    </div>
    <div className="input-group mb-3">
        <input type="text" className="form-control form-control-lg fs-6 input-style" placeholder="&#xF4C8;  Name" />
    </div>
    <div className="input-group mb-3">
        <input type="email" className="form-control form-control-lg fs-6 input-style" placeholder="&#xF32C;  Email address" />
    </div>
    <div className="input-group mb-3">
        <input type="text" className="form-control form-control-lg fs-6 input-style" placeholder="&#xF4CF;  Reg. Id" />
    </div>
    <div className="input-group mb-3">
        <input type="password" className="form-control form-control-lg fs-6 input-style" placeholder="&#xF44E;  Password" />
    </div>
    <div className="input-group mb-2">
        <button className="btn btn-lg w-100 fs-6">Register  &#xF4DD;</button>
    </div>
    <div className="row forgot">
        <small>Already a user? <a href="#" className="forgot-signup hover-link">Log in</a></small>
    </div>
        
      </form>

</div>

</div>

    </div>
  )
}

export default Register