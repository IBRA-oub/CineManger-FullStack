import React, { useRef, useState } from 'react';
import bgImg from '../assets/images/bgImg.png';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPasswordValidation } from '../../hooks/validation/restPasswordValidation';
import axios from 'axios';

export default function ResetPassword() {

    const {token} = useParams();
    const navigate = useNavigate();

    
    const { validateForm, resetForm, getError, hasError, isFormValided } = resetPasswordValidation();
    const passwordField = useRef();
    const confermPassword = useRef();

    const handleSubmit = async (e) => {

        e.preventDefault()


       

        const fields = {
            password: passwordField.current.value,

        }
        

        

        if (validateForm(fields)) {

            if (passwordField.current.value !== confermPassword.current.value) {
                document.getElementById("passwordNotMatch").classList.remove("hidden");
               return;
            }
            
            try {
                // Envoie la requête POST avec axios
                const response = await axios.post(`http://localhost:3000/api/user/resetPassword/${token}`, {
                    password: passwordField.current.value,
                });
    
                if (response.status === 200) {
                   navigate("/login");
                }
            } catch (error) {
                console.error("Error:", error);
                
            }





            resetForm({ passwordField });
        }
    }


    return (
        <>
            <div className=' w-full h-[150vh] md:h-[100vh] roun bg-cover bg-center flex justify-center  md:items-center  ' style={{ backgroundImage: `url(${bgImg})` }} >

                <div className='absolute top-52 w-96 h-96 bg-black '>
                    <div className='w-full rounded-md  h-full bg-[#ffffff26]  flex items-center justify-center'>
                        <div className=" bg-opacity-50 p-8 rounded-lg w-full max-w-md">
                            <h2 className="text-4xl  font-bold text-center text-white mb-9 [text-shadow:_0_4px_8px_#000000]"><span>Reset your password </span><br /></h2>

                            <form onSubmit={handleSubmit}>


                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-white mb-2">New Password</label>
                                    <input ref={passwordField} type="text" id="password" name="password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                    {hasError("password") && <div className="text-red-400  font-bold">{getError("password")}</div>}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="confermPassword" className="block text-white mb-2">Conferm Password</label>
                                    <input ref={confermPassword} type="text" id="confermPassword" name="confermPassword" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                    <div id='passwordNotMatch' className=" hidden text-red-400 font-bold">password doasn't match</div>
                                </div>

                                <button type="submit" className="w-full py-2 bg-[#ff0707]  text-white font-bold rounded-md hover:bg-white hover:text-[#ff0707]  transition">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
