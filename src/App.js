import './App.css';
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner';

import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const[courses, setCourse] = useState([]);
  const[loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);


  // useEffect(() => {
  // async function fetchData() {
    const fetchData = async () => {
      // jab tak ye response aa rha hai tab tak loading ka ICON dikhega
      setLoading(true);
      try {
        const res  = await fetch(apiUrl);
        const output = await res.json();
        // console.log(data);
        
        // save data into a variable
        setCourse(output.data);
      } catch(error) {
        // console.log("Error : ", error);
        toast.error("Something went wrong!!");
      }
      setLoading(false);
    }

    // fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#262a38]">
      <Navbar />
      <div className='bg-[#262a38]'>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading 
              ?
            <Spinner/>
              :
            <Cards courses = {courses} category={category}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
