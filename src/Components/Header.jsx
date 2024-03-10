import React, { useState } from 'react'
import logo from '../../src/assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function Header() {
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]

    const [toggle,setToggle] =useState(false)
  return (
    <div className=' flex items-center  justify-between p-5'>
    <div className='flex gap-8 items-center '>
     {/*disney logo  */}
       <img src={logo} className='w-[100px] md:w-[115px] object-cover' />

        {/*icons for Laptop   */}
       <div className='hidden md:flex gap-8'>
       {menu.map((item,key)=>(
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
       </div>

        {/*icons for phone responsive  */}
       <div className='flex md:hidden gap-5'>
       {menu.map((item,index)=>index<3 && (
          <HeaderItem name={''} Icon={item.icon}/>
        ))}

        {/*icons when toggle icon click show 3  */}
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
         <HeaderItem name={''} Icon={HiDotsVertical}/>
          {toggle? <div className='absolute mt-3 bg-[#12121212] border-[1px] border-gray-700 p-2 px-2 py-4' >
         {menu.map((item,index)=>index>2 && (
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
         </div>:null}
         
        </div>

       </div>

       </div>


       <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt=""
       className='w-[40px] rounded-full'
       />
    </div>
  )
}

export default Header