import React, { useRef } from 'react';
import seatBg from '../assets/images/seatBg.jpg';
import logo from '../assets/images/logo.png';
import { Link,useNavigate } from 'react-router-dom';
import { useLoginValidation } from '../../hooks/validation/userLoginValidation';
import { loginUserApi } from '../../services/authApi/LoginUserApi';


export default function Login() {

    const { validateForm, resetForm, getError, hasError, isFormValided } = useLoginValidation();
    const emailField = useRef();
    const passwordField = useRef();

    const navigate = useNavigate();


    const handleSubmit = async(e) => {
      
        e.preventDefault()

        const fields = {
            email: emailField.current.value,
            password: passwordField.current.value

        }

        if (validateForm(fields)) {
            try{
                await loginUserApi(fields);
                navigate('/client-reservation')
                

            }catch(error){
               console.log(error)
            }





            resetForm({ emailField, passwordField });
        }
    }

    return (
        <>
            <div className=' w-full h-[150vh] md:h-[100vh] roun bg-cover bg-center flex justify-center md:items-center  ' style={{ backgroundImage: `url(${seatBg})` }} >

                <div className='w-[80%] md:w-[70%] h-[50%] md:h-[80%] bg-[#ffffff26] md:flex '>
                    <Link to="/">
                        <div className='absolute w-10 h-10  bg-cover bg-center' style={{ backgroundImage: `url(${logo})` }} >
                        </div>
                    </Link>
                    <div className='w-full md:w-1/2 h-full bg-[#ffffff26]  flex items-center justify-center'>
                        <div className=" bg-opacity-50 p-8 rounded-lg w-full max-w-md">
                            <h2 className="text-4xl font-bold text-center text-white mb-6 [text-shadow:_0_4px_8px_#000000]">Sign In</h2>

                            <form onSubmit={handleSubmit}>


                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                                    <input ref={emailField} type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                    {hasError("email") && <div className="text-red-400  font-bold">{getError("email")}</div>}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-white mb-2">Password</label>
                                    <input ref={passwordField} type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                    {hasError("password") && <div className="text-red-400 font-bold">{getError("password")}</div>}
                                </div>

                                <button type="submit" className="w-full py-2 bg-[#ff0707]  text-white font-bold rounded-md hover:bg-white hover:text-[#ff0707]  transition">Submit</button>
                            </form>
                            <Link to="/forget-password" className='text-sm text-white hover:text-blue-500 w-full flex justify-end py-1'>
                                forget password?
                            </Link>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 h-[80%] md:h-full bg-[#ff0707] '>


                        <div className='absolute top-[80%] md:top-40 w-[80%] md:w-[35%] h-52 '>
                            <p className='text-white text-center font-bold text-3xl md:text-5xl py-10 [text-shadow:_0_4px_8px_#000000] '>You don’t have an account yet! let’s make one</p>
                            <Link to="/Register" className='text-white [text-shadow:_0_4px_8px_#000000]  flex justify-center'>
                                <button className='border border-white py-2 px-16 rounded-md font-bold hover:bg-white hover:text-red-700'>
                                    Register
                                </button>
                            </Link>
                           
                           
                        </div>
                        


                    </div>
                </div>
            </div>
        </>
    )
}
