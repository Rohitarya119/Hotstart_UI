import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";



const Image_Base_Url="https://image.tmdb.org/t/p/original"
const scrrenWidth=window.innerWidth;
function Slider() {
   
    const [moviList,setMovieList] = useState([]);
    const elementRef=useRef();

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(res=>{
            console.log(res.data.results);
            setMovieList(res.data.results)
            
        })
    }

    const sliderRight=(element)=>{
      element.scrollLeft+=scrrenWidth;
    }

    const sliderLeft=(element)=>{
      element.scrollLeft-=scrrenWidth;
    }

  return (
    <div>
    <FaChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer ' onClick={()=>sliderLeft(elementRef.current)}/>
    <FaChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)} />

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>

       {moviList.map((items,index)=>(
         <img src={Image_Base_Url+items.backdrop_path} alt="demo image" className='min-w-full  md:h-[500px] object-cover object-left-top mr-5 hover:border-[4px] border:gray-400 transition-all duration-100 ease-in-out ' />
       ))


       }
       


    </div>
    </div>
  )
}

export default Slider