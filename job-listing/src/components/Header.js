import React from 'react';

const Header = () =>{
    return (
        <div className='w-full mb-6 container relative z-1 bg-cyan'>
            <img className='w-full md:hidden' src='/images/bg-header-mobile.svg'></img>
            <img className='w-full hidden md:block' alt='header background image' src ='/images/bg-header-desktop.svg'></img>
        </div>
    )
}

export default Header;
