import React, { useState } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../utils/apis';
import "./ResetPassword.css"
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
    const navigate = useNavigate();
    const defaultValues = {
        password: "",
        confirmPassword: "",
    }

    const [newPassword, setNewPassword] = useState(defaultValues);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNewPassword({ ...newPassword, [name]: value })
    }

    const token = useParams();

    const resetpassword = (updatedPassword) => {

        const resetPassEndpoint = `/api/password/reset/${token["token"]}/`
        axiosInstance.put(resetPassEndpoint, updatedPassword)
            .then((response) => {
                alert("Password changed successfully");
                navigate("/login")
            })
            .catch((error) => {
                alert(error.response.data.error)
                setNewPassword(defaultValues)
            })
    }

    const submitNewPassword = (e) => {
        e.preventDefault();
        resetpassword(newPassword);
    }


    return (
        <>
            <div class="container p-sm-4 p-3 border border-1 resetPassContainer shadow-lg forget text-light">
                <div class="fw-1 resetpass text-center mb-4">Reset Password</div>
                <form action="" onSubmit={submitNewPassword}>
                    <div class="my-3">
                        <label class="form-label">New Password</label>
                        <input type="password" class="form-control input-style" name='password' onChange={handleChange} value={newPassword.password}/>
                    </div>
                    <div class="my-3">
                        <label class="form-label">Confirm Password</label>
                        <input type="password" class="form-control input-style" name='confirmPassword' onChange={handleChange} value={newPassword.confirmPassword}/>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 my-3 btn1 btn2">Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword