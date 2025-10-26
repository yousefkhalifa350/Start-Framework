import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar() {
  
  
const [expand , setExpand]=useState(false);
  
  return (
   



    <>
    



<nav className='bg-[#2C3E50] p-7 fixed top-0 left-0 right-0 z-50'>

<div className='container'>

<div className=''>

<div className='flex justify-between order-first lg:order-none '>

<h1 className='text-amber-50 font-bold text-3xl flex items-center'>
 <NavLink to={'/'}>START FRAMEWORK  </NavLink>
</h1>

<ul className=' hidden lg:flex text-amber-50 font-bold text-xl space-x-6 mr-8 py-4 items-center'>
  <li><NavLink className={'nav_link'} to='About'>ABOUT</NavLink>  </li>
  <li>  <NavLink className={'nav_link'} to='Portfolio'>PORTFOLIO</NavLink></li>
  <li>  <NavLink className={'nav_link'} to='Contact'>CONTACT</NavLink></li>
</ul>

</div>

<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setExpand(!expand)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer  mt-4 size-7 lg:hidden text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</div>

{expand ? <ul className='md:hidden space-y-4 mt-2 text-amber-50 font-bold'>
  <li><NavLink className={'nav_link'} to='About'>ABOUT</NavLink>  </li>
  <li>  <NavLink className={'nav_link'} to='Portfolio'>PORTFOLIO</NavLink></li>
  <li>  <NavLink className={'nav_link'} to='Contact'>CONTACT</NavLink></li>
</ul> : null }

</div>



</nav>





    </>

  )
}


