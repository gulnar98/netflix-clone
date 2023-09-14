'use client'
import React, { useEffect, useState } from 'react'
import Image from '../../../node_modules/next/image';



function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
  
   const BASE_URL="https://api.themoviedb.org/3"

   const image_URL ="https://image.tmdb.org/t/p/original/"
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`${BASE_URL}${fetchUrl}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, [fetchUrl]);
  console.log(movies)

  return (
    <div className="text-white bg-black ml-5">
    <h1>{title}</h1>
    <div className='flex overflow-y-hidden overflow-x-scroll p-5'>
    {movies.map(movie=>(
        (isLargeRow && movie.poster_path) ||
        (!isLargeRow && movie.backdrop_path)) &&
        <Image key={movie.id} className={`max-h-28 w-full object-contain mr-2.5 transition-transform duration-450  hover:scale-150 hover:opacity-100 ${isLargeRow ? "max-h-64 hover:scale-150 hover:opacity-100" :""} `}
        src={`${image_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
        width={500}
        height={100}
      />
      
    )}
    </div>
 

    
    
    
    
    </div>
  )
}

export default Row