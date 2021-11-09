import Header from './components/Header';
import JobCards from './components/Cards';
import data from './components/data/data.json';
import {React, useState} from 'react';

import { RiCloseLine } from "react-icons/ri";

function App() {

  const [filterValue, setFilterValue] = useState(new Set())

  console.log(filterValue)

  //filter job lists
  function filterFunction(data, filterVal){
    return data.filter((job) => filterVal.includes(job.role) || 
    filterVal.includes(job.level) || 
    job.languages.some(item => filterVal.includes(item)) || 
    job.tools.some(item => filterVal.includes(item)))
  }

  const filterData = filterFunction(data, Array.from(filterValue))
  
  return (
    <div>
       <div className='w-full bg-very_light_gray_cyan min-h-screen'>
          <Header />
          {filterData.length > 0 && (
            <div className='md:max-w-5xl mx-auto p-4 rounded -mt-6 relative z-10 bg-white'>
            <div>
            {Array.from(filterValue).map((val) => 
              <span className='inline-flex items-center m-2'>
                <button key={Math.random()} className='bg-very_light_gray_cyan  text-sm p-2 text-cyan cursor-pointer font-semibold rounded rounded-r-none'>{val}</button>
                <button onClick={() => {
                  filterValue.delete(val)
                  setFilterValue((prev) => new Set([...prev]))
                }} className='bg-cyan focus:outline-none p-2 text-cyan cursor-pointer rounded rounded-l-none'><RiCloseLine size="1.2rem" color='white' style={{ pointerEvents:'none' }} /></button>
              </span>
              )}
              <div className='float-right'>
                <button onClick={() => setFilterValue(new Set())} className='text-cyan focus:outline-none cursor-pointer border-b-2 font-semibold border-cyan'>Clear All</button>
              </div>
            </div> 
          </div>
          )}
          <div className='p-3'>
            {(filterData.length > 0 ? filterData : data).map(job => <JobCards 
              key={job.id} 
              logo={job.logo}
              company={job.company}
              isNew={job.new}
              featured={job.featured}
              position={job.position}
              postAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              role={job.role}
              level ={job.level}
              languages={job.languages}
              tools = {job.tools}
            filterFunction={(e) => setFilterValue((prev) => new Set([e.target.textContent, ...prev]))} />)} 
            </div>
       </div>
    </div>
  );
}
       
export default App;
