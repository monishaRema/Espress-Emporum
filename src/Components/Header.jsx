import React from 'react';
import { Link } from "react-router";
import HeaderBg from '../assets/Header-bg.png'
import Logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${HeaderBg})` }}>
            <div className="container mx-auto px-5 py-5 text-center">
                <Link to="/" className='flex justify-center gap-2 items-center'>
                    <img src={Logo}></img>
                    <h2 className='text-6xl text-white font-black'>Espresso Emporium</h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;