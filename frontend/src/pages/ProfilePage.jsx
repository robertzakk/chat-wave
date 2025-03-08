import React from 'react';
import noProfileImage from '../assets/noProfile.jpg';

function ProfilePage() {
    function onLogInRedirectionClick() {
        window.location.href = '/login';
    };

    function onSignUpRedirectionClick() {
        window.location.href = '/login?signup=true';
    };
    
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-225 rounded-xl p-5 flex flex-col'>
                    <div className='flex mb-5'>
                        <img src={noProfileImage} className='shadow-lg size-50 rounded-full'/>
                        <div className='flex flex-col ml-10 flex-1'>
                            <h1 className='text-5xl mb-3'>Profile Name</h1>
                            <div className='relative flex-1 bg-gray-100 flex justify-center items-center rounded-xl'>
                                <p className='absolute left-4 top-2 text-gray-400'>About</p>
                                <p><span onClick={onLogInRedirectionClick} className='hover:cursor-pointer hover:underline text-blue-500'>Log in</span> to tell others about yourself</p>
                            </div>
                        </div>
                    </div>

                    <div className='mb-5 relative h-50 bg-gray-100 rounded-xl justify-center items-center flex'>
                        <p className='absolute left-4 top-2 text-gray-400'>Friends</p>
                        <p><span onClick={onLogInRedirectionClick} className='hover:cursor-pointer hover:underline text-blue-500'>Log in</span> to add friends</p>
                    </div>

                    <div className='flex justify-center'>
                        <div className='relative'>
                            <p className='absolute -left-3 -top-1 text-red-500'>*</p>
                            <p>
                                Your profile is currently not public, <span onClick={onSignUpRedirectionClick} className='hover:cursor-pointer hover:underline text-blue-500'>sign up</span> to make one or <span onClick={onLogInRedirectionClick} className=' hover:cursor-pointer hover:underline text-blue-500'>log in</span> if you have an existing one.
                            </p>
                        </div>
                    </div>

                    <div className='h-0.5 my-5 bg-gray-200'></div>

                    <h1 className='text-4xl text-center mb-5'>Ready to talk to <span className='text-blue-500'>strangers?</span></h1>
                
                    <div className='flex justify-center mb-2'>
                        <button className='hover:cursor-pointer hover:bg-blue-400 transition-all bg-blue-500 w-1/3 h-15 rounded-full text-white'>
                            <div>
                                <img />
                                <p className='text-2xl'>Find chatter</p>
                            </div>
                        </button>
                    </div>
                    
                    <div className='flex justify-center items-center'>
                        <div className='w-4 h-4 bg-green-400 rounded-full mr-2'></div>
                        <p className='text-xl text-green-400'>52 Active users</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;