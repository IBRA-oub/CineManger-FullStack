import React, { useState } from 'react'
import { useRegisterValidation } from '../../../hooks/validation/useRegisterValidation';
import { updateUserInfo } from '../../../services/userApi/updateUserInfoApi';

export default function Dashboard({ user, handleUserUpdate, countUser, countFilm, countReservation, countSeance }) {

    const { validateForm, resetForm, getError, hasError, isFormValided } = useRegisterValidation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [imageField, setImageField] = useState('');
    const [isUpload, setIsUpload] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        let fields = {
            nom: nameField,
            email: emailField,
            password: passwordField

        }
        if (validateForm(fields)) {
            const data = new FormData();
            data.append('nom', nameField);
            data.append('email', emailField);
            data.append('password', passwordField);
            if (imageField) {
                data.append('image', imageField);
            }
            try {


                const userData = await updateUserInfo(data);
                handleUserUpdate(userData);
                setIsUpload(false)



            } catch (error) {
                document.getElementById("userExists").classList.remove("hidden");
            }

            resetForm({ nameField, emailField, passwordField });
        }

    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageField(file);
            setIsUpload(true)

        }
    };
    return (
        <>
            <div className='pt-10 bg-[#d9d9d9]'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="60" viewBox="0 0 512 512"><path fill="#454545" d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z" /></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{countFilm}</p>
                            <p>Films</p>
                        </div>
                    </div>
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="60" viewBox="0 0 512 512"><path fill="#454545" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{countSeance}</p>
                            <p>Sessions</p>
                        </div>
                    </div>
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{countReservation}</p>
                            <p>Reservation</p>
                        </div>
                    </div>
                    <div className="bg-[#383838]  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">{countUser}</p>
                            <p>Users</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-screen bg-[#d9d9d9]">


                <div className="max-w-6xl mx-auto p-8">
                    <form onSubmit={handleSubmit} className="flex space-x-8" encType='multipart/form-data'>
                        <div className="flex-1 bg-white rounded-lg shadow p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">My Account</h2>
                                <button type="submit" className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-4 rounded">Edit</button>
                            </div>

                            <div className="mt-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Username</label>
                                        <input
                                            type="text"
                                            onChange={(e) => setNameField(e.target.value)}
                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {hasError("name") && <div className="text-red-400  font-bold">{getError("name")}</div>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                                        <input
                                            type="email"
                                            onChange={(e) => setEmailField(e.target.value)}
                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {hasError("email") && <div className="text-red-400  font-bold">{getError("email")}</div>}
                                        <div id='userExists' className=" hidden text-red-400 font-bold">email already existe</div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            value={passwordField}
                                            onChange={(e) => setPasswordField(e.target.value)}
                                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {hasError("password") && <div className="text-red-400 font-bold">{getError("password")}</div>}
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="w-80 bg-white rounded-lg shadow p-6">
                            <div className="text-center">
                                <img
                                    src={user.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                                    alt="Profile Avatar"
                                    className="w-36 h-36 rounded-full mx-auto"
                                />
                                <h3 className="text-xl font-bold mt-4">{user.nom}</h3>

                                <div className="flex justify-around mt-4">
                                    <div>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                        {!isUpload && <label htmlFor="fileInput" className="cursor-pointer inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512" className="mr-2">
                                                <path fill="#ffffff" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                                            </svg>
                                            Upload Image
                                        </label>}
                                        {isUpload && <label htmlFor="fileInput" className=" cursor-pointer inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-16 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>

                                        </label>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 ">
                                <p><span className="font-bold">Email:</span> {user.email}</p>
                                <p><span className="font-bold">Role : </span> Admin</p>
                                <p><span className="font-bold"></span> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
