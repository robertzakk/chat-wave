import React, { useState } from 'react';
import PreviousChat from './PreviousChat';

function Sidebar(props) {
    return (
        <>
            <div className='bg-blue-600 row-span-2'>
                <h1 className='text-center my-5 text-2xl text-white font-semibold'>Previous chats</h1>
                <div className='flex flex-col m-5'>
                    <PreviousChat />
                    <PreviousChat />
                    <PreviousChat />
                    <PreviousChat />
                    <PreviousChat />
                </div>
            </div>
        </>
    );
};

export default Sidebar;