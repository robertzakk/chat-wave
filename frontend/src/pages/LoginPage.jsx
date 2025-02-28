import React from 'react';
import LoginForm from '../components/LoginForm';
import companyIcon from '../assets/ChatWaveLogo.png';

function LoginPage() {
    return (
        <>            
            <div className='flex flex-col justify-center items-center bg-blue-500 [@media(min-height:42rem)]:h-dvh'>
                <div className='flex items-center relative right-3'>
                    <img src={companyIcon} className='w-12 h-12 mr-3 opacity-50'/>
                    <h1 className='text-center mt-10 text-white font-bold text-2xl opacity-50 mb-10'>ChatWave</h1>
                </div>
                
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