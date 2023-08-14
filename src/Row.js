import React,{useState,useEffect} from "react";
import axios from "./axios";
import './Row.css'
//import requests from "./requests";
const base_url="https://image.tmdb.org/t/p/w500";
function Row({title,fetchUrl,isLargeRow}){
    //state is used as a short term memory..
    const [movies,setMovies]=useState([]);
    useEffect(() =>{
        //if [],run once when row loads and dont run again
        //using async function
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
           //console.log(request)
            
        }
    fetchData();
   
    },[fetchUrl]);
    //console.log(movies);
    return(
        <div className="row">
            <h2>{title}</h2>
           <div className="row_posters">
                {movies.map(movie =>(
                   <img className={`row_poster ${isLargeRow &&'row_poster_Large'}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))} 
                </div>


        </div>
    )
}
export default Row