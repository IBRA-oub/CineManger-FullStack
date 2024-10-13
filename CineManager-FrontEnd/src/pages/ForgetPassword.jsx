import React, { useRef } from 'react';
import bgImg from '../assets/images/bgImg.png';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { requestResetPasswordValidation } from '../../hooks/validation/requestResetPasswordValidation';
import { requestRestPAssword } from '../../services/authApi/requestResetPasswordApi';



export default function ForgetPassword() {

    const { validateForm, resetForm, getError, hasError, isFormValided } = requestResetPasswordValidation();
    const emailField = useRef();

   



    const handleSubmit = async (e) => {

        e.preventDefault()


        const fields = {
            email: emailField.current.value,

        }

        if (validateForm(fields)) {
            try {
                const userData = await requestRestPAssword(fields);
                document.getElementById("success").classList.remove("hidden");


            } catch (error) {
                document.getElementById("userNotExist").classList.remove("hidden");
            }





            resetForm({ emailField });
        }
    }

    return (
        <>
            <div className=' w-full h-[150vh] md:h-[100vh] roun bg-cover bg-center flex justify-center  md:items-center  ' style={{ backgroundImage: `url(${bgImg})` }} >
                <div id='success' className='hidden w-full h-screen bg-[#000000df] z-10 flex justify-center items-center'>
                    <div class="w-full md:w-1/3 mx-auto">
                        <div class="flex flex-col p-5 rounded-lg shadow bg-white">
                            <div class="flex flex-col items-center text-center">
                                <div class="inline-block p-4 bg-yellow-50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 512 512"><path fill="#04ff00" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z"/></svg>
                                </div>
                                <h2 class="mt-2 font-semibold text-gray-800">Password Reset Successful!</h2>
                                <p class="mt-2 text-sm text-gray-600 leading-relaxed">Your password reset request has been processed successfully. An email containing a link to reset your password has been sent to you.

                                    Please check your inbox (or spam folder) and follow the instructions to choose a new password.</p>
                            </div>

                            <div class="flex items-center mt-3">
                                <button class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">

                                </button>

                                <Link to="/" class="flex-1 text-center px-4 py-2 ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md">
                                    back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute top-52 w-96 h-96 bg-black '>
                    <Link to="/">
                        <div className='absolute w-10 h-10  bg-cover bg-center' style={{ backgroundImage: `url(${logo})` }} >
                        </div>
                    </Link>
                    <div className='w-full rounded-md  h-full bg-[#ffffff26]  flex items-center justify-center'>

                        <div className=" bg-opacity-50 p-8 rounded-lg w-full max-w-md">
                            <h2 className="text-4xl  font-bold text-center text-white mb-16 [text-shadow:_0_4px_8px_#000000]"><span>Did you forget password!? </span><br /><span className='text-sm font-light'>don't worry just enter your email</span></h2>

                            <form onSubmit={handleSubmit}>


                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                                    <input ref={emailField} type="text" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                    {hasError("email") && <div className="text-red-400  font-bold">{getError("email")}</div>}
                                    <div id='userNotExist' className=" hidden text-red-400 font-bold">email doasn't existe</div>
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
