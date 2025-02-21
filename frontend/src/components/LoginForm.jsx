import React, { useState } from 'react';

function LoginForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        console.log('Password visibility toggled');
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
            <div className='max-w-75 mx-10'>
                <form className='flex flex-col bg-gray-100 rounded-lg p-5 shadow-lg'>
                    <h1 className='text-lg font-semibold mb-5 text-center text-blue-500'>Login</h1>

                    <label className='text-gray-500'>Email</label>
                    <input className='valid:bg-green-200 invalid:bg-red-200 outline-blue-500 bg-gray-200 p-3 rounded-xl mb-5' type='email' name='username' placeholder='Enter email' required/>

                    <label className='text-gray-500'>Password</label>
                    <div className='relative mb-5'>
                        <input className='valid:bg-green-200 invalid:bg-red-200 focus:outline-blue-500 bg-gray-200 p-3 rounded-xl w-full' type={isPasswordVisible ? 'text' : 'password'} name='password' placeholder='Enter password' required/>
                        <button className='outline-blue-500 hover:cursor-pointer absolute right-3 bottom-0 top-0' onClick={togglePasswordVisibility} type='button'>
                            {
                                isPasswordVisible ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </>
                                )
                            }
                        </button>
                    </div>

                    <button className='focus:bg-blue-400 outline-0 hover:bg-blue-400 hover:cursor-pointer bg-blue-500 text-white p-3 rounded-full transition-all' type='submit'>Log In</button>
                </form>

                <button className='focus:bg-blue-400 hover:bg-blue-400 hover:cursor-pointer outline-1 outline-white border-white text-white p-3 rounded-full my-3 w-full transition-all'>
                    <div className='flex justify-center'>
                        <p className='mr-2'>Sign in with Google</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                        </svg>
                    </div>
                </button>
                <button className='focus:bg-blue-400 hover:bg-blue-400 hover:cursor-pointer outline-1 outline-white text-white p-3 rounded-full w-full transition-all'>
                    <div className='flex justify-center'>
                        <p className='mr-2'>Sign in with Github</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                        </svg>
                    </div>
                </button>
            </div>  
        </>
    );
};

export default LoginForm;