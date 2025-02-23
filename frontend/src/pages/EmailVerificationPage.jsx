import React from 'react';
import EmailVerification from '../components/EmailVerification';
import { useSearchParams } from 'react-router';

function LoginPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    if (!searchParams.get('email')) {
        return (
            <>
                <div className='flex flex-col justify-center items-center bg-blue-500 h-dvh'>
                    <h1 className='text-2xl text-red-500'>No email provided.</h1>

                    <footer className='flex items-center p-5 h-20 mb-5 '>
                        <p className='text-blue-300 text-md flex-1 text-center'>
                            Copyright &copy; {new Date().getFullYear()} Robert Zak. All rights reserved.
                        </p>
                    </footer>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-blue-500 [@media(min-height:25rem)]:h-dvh">
                <h1 className='text-center mt-10 text-white font-bold text-2xl mb-10'>ChatWave</h1>
                
                <EmailVerification />

                <footer className='flex items-center p-5 h-20 mb-5 '>
                    <p className='text-blue-300 text-md flex-1 text-center'>
                        Copyright &copy; {new Date().getFullYear()} Robert Zak. All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
}

export default LoginPage;