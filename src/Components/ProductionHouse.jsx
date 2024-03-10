import React from 'react'

//Images
import pixar from '../assets/Images/pixar.png'
import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'
import starwar from '../assets/Images/starwar.png'

//Videos
import pixarV from '../assets/Videos/pixar.mp4'
import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeographicV from '../assets/Videos/national-geographic.mp4'
import starwarV from '../assets/Videos/star-wars.mp4'

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
      {productionHouseList.map((item)=>( 
        <div className='border-[2px] border-gray-600
         rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800'>
         <img src={item.image} alt="" className='w-full z-[1]' />
         <video src={item.video} autoPlay loop playsInline 
         className='absolute top-0  rounded-md z-0 opacity-0 hover:opacity-50'/> 
          
        </div>
      ))

      }
    </div>
  )
}

export default ProductionHouse