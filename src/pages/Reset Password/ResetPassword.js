import React, { useState } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../utils/apis';

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

    const resetpassword = (updatedPassword) =>{

        const resetPassEndpoint = `/api/password/reset/${token}/`

        axiosInstance.put(resetPassEndpoint, updatedPassword)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const submitNewPassword = (e)=>{
        resetpassword(newPassword);
    }


    return (
        <>
            <p className='text-light'>Reset Password</p>
            <form onSubmit={submitNewPassword}>
                <label className='text-light'>
                    New password :
                    <input
                        name="password"
                        value={defaultValues.password}
                        onChange={handleChange}
                    />
                </label>

                <br/>
                <label className='text-light'>
                    confirm password :
                    <input
                        name="confirmPassword"
                        value={defaultValues.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
                <br/>

                <button type='submit' className='bg-light'>
                    Change Password
                </button>

            </form>

        </>
    )
}

export default ResetPassword