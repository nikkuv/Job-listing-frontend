import Header from './components/Header';
import JobCards from './components/Cards';
import data from './components/data/data.json';

function App() {

  return (
    <div >
       <div className='w-full bg-very_light_gray_cyan m-auto'>
          <Header />
          {data.map(job => <JobCards key={job.id} {...job} />)}
       </div>
       
    </div>
  );
}

export default App;
