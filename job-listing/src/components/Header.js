import React from 'react';

const Header = () =>{
    return (
        <div className='w-full mb-6 container relative z-1 bg-cyan'>
            <img className='w-full  md:hidden' src='/images/bg-header-mobile.svg' alt='backgroundImage'></img>
            <img className='w-full hidden md:block' src ='/images/bg-header-desktop.svg' alt='backgroundImage'></img>
        </div>
    )
}

export default Header;
