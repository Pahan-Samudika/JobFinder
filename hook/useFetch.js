import {useState,useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': '7051f6df36mshd5e6bdbd4bd5a48p1b9319jsn10705f4cc428',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
      };

      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.error(error);
            alert('There is an error !')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(()=>{
          fetchData();
      },[]);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data,isLoading,error,refetch};
}


export default useFetch;


