import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function MovieList({genreId}) {
    const scrrenWidth=window.innerWidth;

    const elementRef=useRef();

    
    const [MovieList,setMovieList]=useState([])
    useEffect(()=>{
        getMovieByGenreId();
    },[])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }
    const sliderRight=(element)=>{
      element.scrollLeft+=500;
    }

    const sliderLeft=(element)=>{
      element.scrollLeft-=500;
    }
  return (
    <div>
    <FaChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0 ' onClick={()=>sliderLeft(elementRef.current)}/>
    <FaChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)} />

    <div ref={elementRef} className='flex overflow-x-auto gap-8 pt-5 px-3 pb-5 scrollbar-hide scroll-smooth'>
      {MovieList.map((item,index)=>(
        <MovieCard movie={item}/>
      ))}
    </div>
    </div>
  )
}

export default MovieList