import React, { useState } from 'react';
import { Outlet } from 'react-router';
import axios from 'axios';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function RootPage() {
    return (
        <>
            <div className='flex flex-col h-dvh'>
                <Header />
                <div className='flex-1 grid grid-cols-[1fr_325px] grid-rows-[1fr_150px]'>
                    <Outlet />
                    <Sidebar />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default RootPage;