import React, { useState } from 'react';
import companyIcon from '../assets/ChatwaveLogo_Black.png';

function Footer() {
    return (
        <>
            <div className='bg-gray-200 flex items-center pl-10'>
                <img src={companyIcon} className='size-20 mr-5 opacity-40'/>
                <p className='w-55 text- opacity-40 font-semibold'>Copyright {new Date().getFullYear()} Robert Zak. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;