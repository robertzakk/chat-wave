import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-blue-500 [@media(min-height:45rem)]:h-dvh'>
                <h1 className='text-center mt-10 text-white font-bold text-2xl mb-10'>ChatWave</h1>
                    <LoginForm />
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