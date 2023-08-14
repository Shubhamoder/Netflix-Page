import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import requests from './requests';
import './Banner.css';
//const base_url="https://image.tmdb.org/t/p/w500";
function Banner() {
    const[movie,setMovie]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);
    console.log(movie);
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
}  
    return (
    
    <header className='banner' 
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
        
    }}
    >
       {/*("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")*/} 
        {/*Background Image */}
        <div className='banner_contents'>
             {/*Title */}
        {/* div > 2 Buttons*/}
        <h1 className='banner_title'>
            {movie?.title ||movie?.name||movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='button_button'>Play</button>
                <button className='button_button'>List</button>
                </div>    
        
         {/* Description*/ }
<h1 className='banner_description'>
    {truncate(movie?.overview,150)}</h1>
       
       </div>
       <div className='banner--fadebutton'></div>
    </header>
  )
}

export default Banner