import React from 'react';

const JobCards = ({logo, company, isNew, featured, position, postAt, contract, location, role, level, languages, tools, filterFunction}) => {

    return (
        <div className='max-w-5xl md:block shadow-lg mx-auto rounded md:flex md:justify-between md:tems-center bg-white p-6 m-6 '>
            <div className='md:flex md:items-center'>
                <div className='m-2'>
                    <img className='' alt='company logo' src={logo}></img>
                </div>
                <div>   
                    <span className='text-cyan font-bold text-sm m-2'>{company}</span>
                    {isNew && <span className='bg-cyan text-white px-2 py-1 font-medium text-xs uppercase rounded-2xl'>New !</span>}
                    {featured && <span className='bg-very_dark_gray_cyan text-white px-2 py-1 font-medium text-xs uppercase rounded-2xl mx-2'>featured</span>}
                    <h1 className='text-black font-medium md:text-xl m-2'>{position}</h1>
                    <div>
                        <span className='text-dark_gray_cyan text-sm m-2'>{postAt}</span>
                        <span className='m-1 h-1 w-1 inline-block rounded bg-dark_gray_cyan'></span>
                        <span className='text-dark_gray_cyan text-sm m-2'>{contract}</span>
                        <span className='m-1 h-1 w-1 inline-block rounded bg-dark_gray_cyan'></span>
                        <span className='text-dark_gray_cyan text-sm m-2'>{location}</span>
                    </div>
                </div>
            </div>
            <div className='w-full border-t my-2 border-dark_gray_cyan md:hidden'></div>
            <div>
                <button onClick={filterFunction} className ='bg-very_light_gray_cyan m-2 text-sm p-2 text-cyan focus:outline-none cursor-pointer font-semibold rounded'>{role}</button> 
                <button onClick={filterFunction} className ='bg-very_light_gray_cyan m-2 text-sm p-2 text-cyan focus:outline-none cursor-pointer font-semibold rounded'>{level}</button> 
                {languages.map(language => <button onClick={filterFunction} key={Math.random()} className ='bg-very_light_gray_cyan text-sm focus:outline-none m-2 p-2 cursor-pointer text-cyan font-semibold rounded'>{language}</button> )}
                {tools.map(tool => <button onClick={filterFunction} key={Math.random()} className='bg-very_light_gray_cyan text-sm m-2 p-2 text-cyan focus:outline-none cursor-pointer font-semibold rounded'>{tool}</button> )}
            </div>
        </div> 
    )
}

export default JobCards;

