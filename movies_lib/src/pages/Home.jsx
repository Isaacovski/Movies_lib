import {useState, useEffect} from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import React from 'react'

const home = () => {
  const [topMovies, setTopMovies] = useState([]);
 
  const getTopratedMovies = async (url) => {
     const res = await fetch(url);
     const data = await res.json();

     setTopMovies(data.results);
  };

  useEffect(()=>{

    const topRateURL = `${moviesURL}top_rates?api_key=${apiKey}`;

  getTopratedMovies(topRateURL);
  },[]);
 
  return <div>
    {topMovies && topMovies.map((movie) => {<p>movie.title</p>})}</div>
  
}

export default home
