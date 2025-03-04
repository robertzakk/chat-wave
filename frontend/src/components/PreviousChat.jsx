import React from 'react';
import noProfilePicture from '../assets/noprofile.jpg'

function PreviousChat() {


    function onButtonClick() {
        console.log('Previous chat clicked!');
    };

    return (
    <>
        <button onClick={onButtonClick} className='hover:bg-blue-400 hover:cursor-pointer transition-all flex justify-center bg-blue-500 rounded-xl p-3 mb-5'>
            <img src={noProfilePicture} className='mr-5 rounded-full size-24'/>
            <div className='text-center'>
                <h1 className='text-2xl text-white'>Anonymous</h1>
                <p className='text-blue-300'>2/3/2025</p>
            </div>
        </button>
    </>
    ); 
};

export default PreviousChat;