import React, { useState } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../utils/apis';
import "./ResetPassword.css"
const ResetPassword = () => {
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

        const resetPassEndpoint = `/api/password/reset/${token}/`
    
        axiosInstance.put(resetPassEndpoint, updatedPassword)
            .then((response) => {
                console.log(response)
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
            <div class="container p-sm-5 p-3 border border-1 w-50 shadow-lg forget text-light">
                <div class="h4 text-center mb-5">Reset Password</div>
                <form action="" onSubmit={submitNewPassword}>
                    <div class="my-3">
                        <label class="form-label">New Password</label>
                        <input type="password" class="form-control" name='password' onChange={handleChange} value={newPassword.password}/>
                    </div>
                    <div class="my-3">
                        <label class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" name='confirmPassword' onChange={handleChange} value={newPassword.confirmPassword}/>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 my-3">Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword