import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        //console.log(resp);
        headers: {
          Accept: 'application/json',
        },

      });
      setJoke(data.joke);

    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <h5 className='dad-joke'><i>{joke}</i></h5>
    </section>
  );
};
export default Headers;
