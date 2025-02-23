import React, { useState } from 'react';
import { useSearchParams } from 'react-router';
import axios from 'axios';

function EmailVerification() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [verificationCode, setVerificationCode] = useState('');

    const onVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const onEmailVerify = async () => {
        try {
            await axios.post('http://localhost:8080/verification/email/verify', {
                email: searchParams.get('email'),
                verificationCode: verificationCode
            });

            console.log('Email verification successful! Account created & logging you in...');
        } catch (err) {
            console.log('Email verification failed! Please try again.');
        };
    };

    return (
        <>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col basis-100 mx-5'>
                    <form className='flex flex-col w-full bg-gray-100 rounded-lg p-5 shadow-lg'>
                        <div className='mb-5'>
                            <h1 className='text-lg font-semibold text-center text-blue-500'>Email Verification</h1>
                            <h2 className='text-center text-gray-500'>{searchParams.get('email')}</h2>
                        </div>

                        <input onChange={onVerificationCodeChange} value={verificationCode} className='outline-blue-500 bg-gray-200 p-3 rounded-xl mb-5' type='number' name='verification_code' id='verification_code' placeholder='Enter verification code' required/>

                        <button onClick={onEmailVerify} disabled={false} className={'outline-0 text-white p-3 rounded-full transition-all mb-3 ' + ((true) ? 'bg-blue-500 focus:bg-blue-400 hover:bg-blue-400 hover:cursor-pointer' : 'bg-gray-500')} type='button'>Confirm</button>
                        <p className='text-center text-gray-600'>Didn't get a code? <span className='text-blue-500'><button className='hover:underline hover:cursor-pointer outline-blue-500'>Send new code</button></span></p>
                    </form> 
                </div>  
            </div>
        </>
    );
};

export default EmailVerification;