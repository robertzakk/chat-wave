import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passowrd, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailAvailable, setIsEmailAvailable] = useState(false);
    const [emailAvailableTimout, setEmailAvailableTimout] = useState(null);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleIsSigningUp = () => {
        setIsSigningUp(!isSigningUp);
    };

    const onChangeEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (emailAvailableTimout) {
            clearTimeout(emailAvailableTimout);
        };

        const secondsToWaitUntilCheckEmailAvailability = 2;
        const timoutID = setTimeout(() => {
            if (newEmail) {
                console.log(`Checking email availability...`);
            };
        }, secondsToWaitUntilCheckEmailAvailability * 1000);

        setEmailAvailableTimout(timoutID);
    };
    
    return (
        <>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col basis-100'>
                    <form className='flex flex-col w-full bg-gray-100 rounded-lg p-5 shadow-lg'>
                        <h1 className='text-lg font-semibold mb-5 text-center text-blue-500'>{isSigningUp ? 'Sign Up' : 'Log In'}</h1>

                        <label className='text-gray-500' htmlFor='username' >Email</label>
                        <input onChange={onChangeEmail} className='outline-blue-500 bg-gray-200 p-3 rounded-xl mb-2' type='email' name='username' id='username' placeholder='Enter email' required value={email}/>

                        <div className='flex items-center mb-5'>
                            {
                                (email && isSigningUp) && (
                                    isEmailAvailable ? (
                                        <>

                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--color-yellow-600)" className="size-5 animate-spin">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                            <p className='ml-2 text-yellow-600'>Checking email availability</p>
                                        </>
                                    )
                                )
                            }
                        </div>

                        <label className='text-gray-500' htmlFor='password'>Password</label>
                        <div className='relative mb-5'>
                            <input className='focus:outline-blue-500 bg-gray-200 p-3 rounded-xl w-full' type={isPasswordVisible ? 'text' : 'password'} name='password' id='password' placeholder='Enter password' required/>
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
                        {
                            isSigningUp && (
                                <>
                                    <div>
                                        <p className='mb-2 font-semibold text-gray-500'>Password contains:</p>
                                        <ul className='mb-5'>
                                            <li className='mb-1 pl-2 text-red-500'>❌ At least 10 characters</li>
                                            <li className='mb-1 pl-2 text-red-500'>❌ Numbers</li>
                                            <li className='mb-1 pl-2 text-red-500'>❌ Special symbols (!@#$%^&*)</li>
                                        </ul>
                                    </div>
                                </>
                            )
                        }

                        <button className='focus:bg-blue-400 outline-0 hover:bg-blue-400 hover:cursor-pointer bg-blue-500 text-white p-3 rounded-full transition-all mb-3' type='submit'>{isSigningUp ? 'Sign Up' : 'Log In'}</button>
                        <button className='hover:bg-blue-100 focus:bg-blue-100 outline-2 font-semibold outline-blue-500 text-blue-500 hover:cursor-pointer p-3 rounded-full transition-all' type='button' onClick={toggleIsSigningUp}>{isSigningUp ? 'Go Back' : 'Sign Up'}</button>
                    </form>

                    {
                        !isSigningUp && (
                            <>
                                <button className='focus:bg-blue-400 hover:bg-blue-400 hover:cursor-pointer outline-1 outline-white border-white text-white p-3 rounded-full my-4 w-full transition-all'>
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
                            </>
                        )
                    }
                </div>  
            </div>
        </>
    );
};

export default LoginForm;