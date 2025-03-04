import React, { useState } from 'react';
import companyIcon from '../assets/ChatWaveLogo.png';
import serachIcon from '../assets/search-icon.png';

function Header() {

    function onSignupClick() {
        window.location.href = '/login?signup=true';
    };

    function onLoginClick() {
        window.location.href = '/login';
    };

    return (
        <>
            <div className='bg-blue-500 flex justify-between p-5 text-white font-semibold'>
                <div className='flex items-center justify-start'>
                    <img src={companyIcon} className='mr-5 size-16'/>
                    <h1 className='text-4xl'>ChatWave</h1>
                </div>

                <div className='bg-blue-300 flex items-center p-3 flex-1 mx-10 rounded-full max-w-300'>
                    <img src={serachIcon} className='peer-focus:size-16 ml-3 mr-3 size-8 opacity-50'/>
                    <input className='h-full text-2xl focus:outline-none flex-1' placeholder='Search user'/>
                </div>

                <div className='flex'>
                    <button onClick={onLoginClick} className='hover:bg-blue-300 hover:cursor-pointer transition-all p-3 bg-blue-400 w-50 rounded-full text-2xl mr-5'>Log in</button>
                    <button onClick={onSignupClick} className='hover:bg-blue-300 hover:cursor-pointer transition-all p-3 bg-blue-400 w-50 rounded-full text-2xl'>Sign up</button>
                </div>
            </div>
        </>
    );
};

export default Header;