import React from 'react';

const JobCards = (job) => {
    return (
        <div className='max-w-5xl shadow-lg rounded flex justify-between items-center bg-white p-6 m-6'>
            <div className='flex items-center'>
                <div className='m-2'>
                    <img alt='company logo' src={job.logo}></img>
                </div>
                <div>   
                    <span className='text-cyan font-bold text-sm m-2'>{job.company}</span>
                    {job.new && <span className='bg-cyan text-white px-2 py-1 font-medium text-xs uppercase rounded-2xl'>New !</span>}
                    {job.featured && <span className='bg-very_dark_gray_cyan text-white px-2 py-1 font-medium text-xs uppercase rounded-2xl mx-2'>featured</span>}
                    <h1 className='text-black font-medium text-xl m-2'>{job.position}</h1>
                    <div>
                        <span className='text-dark_gray_cyan m-2'>{job.postedAt}</span>
                        <span className='m-1 h-1 w-1 inline-block rounded bg-dark_gray_cyan'></span>
                        <span className='text-dark_gray_cyan m-2'>{job.contract}</span>
                        <span className='m-1 h-1 w-1 inline-block rounded bg-dark_gray_cyan'></span>
                        <span className='text-dark_gray_cyan m-2'>{job.location}</span>
                    </div>
                </div>
            </div>
            <div>
                <span className ='bg-very_light_gray_cyan m-2 p-2 text-cyan font-semibold rounded'>{job.role}</span> 
                <span className ='bg-very_light_gray_cyan m-2 p-2 text-cyan font-semibold rounded'>{job.level}</span> 
                {job.languages.map(language => <span className ='bg-very_light_gray_cyan m-2 p-2 text-cyan font-semibold rounded'>{language}</span> )}
                {job.tools.map(tool =><span className ='bg-very_light_gray_cyan m-2 p-2 text-cyan font-semibold rounded'>{tool}</span> )}
            </div>
        </div> 
    )
}

export default JobCards;