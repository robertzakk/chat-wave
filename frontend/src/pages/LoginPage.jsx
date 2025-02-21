import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
    return (
        <>
            <h1 className='absolute left-0 right-0 text-center mt-10 text-white font-bold text-2xl'>ChatWave</h1>
            <div className='flex flex-col justify-center items-center bg-blue-500' style={{ height: '100vh' }}>
                <LoginForm />
            </div>
            <footer className='flex items-center p-5 absolute left-0 right-0 bottom-0 h-20 '>
                <p className='text-blue-300 text-md flex-1 text-center'>
                    Copyright &copy; {new Date().getFullYear()} Robert Zak. All rights reserved.
                </p>
            </footer>
        </>
    );
}

export default LoginPage;