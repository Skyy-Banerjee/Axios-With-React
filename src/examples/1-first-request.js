import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const fetchData = async() =>{
  try{
    const resp = await axios(url); //axios() === axios.get() - default
    const data = resp.data;
    //console.log(data);
  }
  catch(err){
    console.log(err.response);
  }
}

const FirstRequest = () => {
  useEffect(() => {
   fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
