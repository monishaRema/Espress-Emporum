import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';


const Root = () => {
    return (
        <>
            <Header></Header>
            <main className='py-24'>
                <div className="container mx-auto px-5">
                    <Outlet></Outlet>
                </div>
            </main>
           
        </>
    );
};

export default Root;