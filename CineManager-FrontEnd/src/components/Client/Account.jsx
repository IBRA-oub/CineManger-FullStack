import React, { useState } from 'react';
import { useRegisterValidation } from '../../../hooks/validation/useRegisterValidation';
import { updateUserInfo } from '../../../services/userApi/updateUserInfoApi';

export default function Account({ user,handleUserUpdate }) {
    // console.log(user);

    const { validateForm, resetForm, getError, hasError, isFormValided } = useRegisterValidation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [imageField, setImageField] = useState('');
    const [isUpload , setIsUpload] = useState(false)

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
        <div className="h-screen bg-[#d9d9d9]">
            <div className="relative bg-gradient-to-r from-gray-500 to-[#d9d9d9] p-8">
                <div className="text-white max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-black">Hello {user.nom}</h1>
                    <p className="mt-2 mb-8 text-lg">
                        This is your profile page. You can see all your information and you have the possibility to change it. Have fun on our website!
                    </p>
                </div>
            </div>

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
                                    {!isUpload &&<label htmlFor="fileInput" className="cursor-pointer inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 512" className="mr-2">
                                            <path fill="#ffffff" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                                        </svg>
                                        Upload Image
                                    </label>}
                                    {isUpload &&<label htmlFor="fileInput" className=" cursor-pointer inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-16 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                    
                                    </label>}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 ">
                            <p><span className="font-bold">Email:</span> {user.email}</p>
                            <p><span className="font-bold">Role : </span> Client</p>
                            <p><span className="font-bold"></span> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
