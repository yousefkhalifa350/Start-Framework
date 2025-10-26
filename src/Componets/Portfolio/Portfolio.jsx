import React, { useState } from 'react'
import portimg from '../../assets/img/poert1 (1).png'
import portimg2 from '../../assets/img/port2 (2).png'
import portimg3 from '../../assets/img/port3 (3).png'
import portimg4 from '../../assets/img/poert1 (1) - Copy.png'
import portimg5 from '../../assets/img/port2 (2) - Copy.png'
import portimg6 from '../../assets/img/port3 (3) - Copy.png'

export default function Portfolio() {




const [selectimg , setSelectimg] = useState(null);


function handleimageclick(src) {
   setSelectimg(src);
   console.log(src.target);
   
  
}


  return (

    <>
  


<section className='min-h-[30vh] mt-5  overflow-hidden'>

<div className='container mb-5 ms-3'>


<div className='text-center text-4xl font-bold text-[#2C3E50] '>
  <h1 className='lg:after:w-20 lg:after:h-1 lg:after:absolute lg:after:bottom-0 lg:after:top-18 lg:after:right-155 lg:after:bg-[#2C3E50]   lg:before:w-20 lg:before:h-1 lg:before:absolute lg:before:bottom-0 lg:before:top-18 lg:before:left-155 lg:before:bg-[#2C3E50] relative'>PORTFOLIO COMPONENT</h1>

</div>

<div className='flex items-center justify-center mt-4'>
  <svg class=" hidden lg:block w-6 h-6 text-[#2C3E50] dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>
</div>

<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center  space-y-8 mt-8'>





<div className='relative w-fit group-hover:flex group ' onClick={()=>{if (!selectimg)handleimageclick(portimg)}}>


  <img src={portimg} alt="portimg" className='w-95' />


{selectimg ? (

  <div className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(100,148,237,0.1)] flex justify-center items-center z-50" onClick={() => setSelectimg(null)}>
    
  </div>
) : null}



  

<div className='absolute inset-0 flex items-center justify-center bg-[#28B592]/0 transition-all duration-700 group-hover:bg-[#28B592]'>
  <i className="fa-solid fa-plus text-8xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></i>
</div>





</div>


<div className='relative w-fit group-hover:flex group  ' onClick={()=>{handleimageclick(portimg2)}}>


  <img src={portimg2} alt="portimg2" className='w-95' />
  
{selectimg ? (
  
  <div className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(100,148,237,0.1)] flex justify-center items-center z-50" onClick={() => setSelectimg(null)}>
    
  </div>
) : null}




<div className='absolute inset-0 flex items-center justify-center bg-[#28B592]/0 transition-all duration-700 group-hover:bg-[#28B592]/80'>
  <i className="fa-solid fa-plus text-8xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></i>
</div>




</div>



<div className='relative w-fit group-hover:flex group  ' onClick={()=>{handleimageclick(portimg3)}}>


  <img src={portimg3} alt="portimg3" className='w-95' />
  
{selectimg ? (
  
  <div className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(100,148,237,0.1)] flex justify-center items-center z-50" onClick={() => setSelectimg(null)}>
    
  </div>
) : null}




<div className='absolute inset-0 flex items-center justify-center bg-[#28B592]/0 transition-all duration-700 group-hover:bg-[#28B592]/80'>
  <i className="fa-solid fa-plus text-8xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></i>
</div>




</div>




<div className='relative w-fit group-hover:flex group  ' onClick={()=>{handleimageclick(portimg4)}}>


  <img src={portimg4} alt="portimg4" className='w-95' />
  
{selectimg ? (
  
  <div className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(100,148,237,0.1)] flex justify-center items-center z-50" onClick={() => setSelectimg(null)}>
    
  </div>
) : null}




<div className='absolute inset-0 flex items-center justify-center bg-[#28B592]/0 transition-all duration-700 group-hover:bg-[#28B592]/80'>
  <i className="fa-solid fa-plus text-8xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></i>
</div>



</div>




<div className='relative w-fit group-hover:flex group  ' onClick={()=>{handleimageclick(portimg5)}}>


  <img src={portimg5} alt="portimg5" className='w-95' />
  
{selectimg ? (
  <div className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(100,148,237,0.1)] flex justify-center items-center z-50">
    <img src={selectimg} alt="selected" className="w-96 h-auto rounded-2xl shadow-lg" />
    <span
      className="absolute top-10 right-10 text-white text-4xl cursor-pointer z-800"onClick={(e) => {
  e.stopPropagation();
  setSelectimg(null);
}} > X </span>
  </div>
):null}



<div className='absolute inset-0 flex items-center justify-center bg-[#28B592]/0 transition-all duration-700 group-hover:bg-[#28B592]/80'>
  <i className="fa-solid fa-plus text-8xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></i>
</div>



</div>





<div className='relative w-fit group-hover:flex group mb-7' onClick={()=>{handleimageclick(portimg6)}}>


  <img src={portimg6} alt="portimg6" className='w-95' />
  
{selectimg ? (
  <div className="fixed top-0 left-0 right-0 w-full h-full bg-[rgba(100,148,237,0.1)] flex justify-center items-center z-50">
    <img src={selectimg} alt="selected" className="w-96 h-auto rounded-2xl shadow-lg" />
    <span
      className="absolute top-10 right-10 text-white text-4xl cursor-pointer z-800"onClick={(e) => {
  e.stopPropagation();
  setSelectimg(null);
}} > X </span>
  </div>
):null}



<div className='absolute inset-0 flex items-center justify-center bg-[#28B592]/0 transition-all duration-700 group-hover:bg-[#28B592]/80'>
  <i className="fa-solid fa-plus text-8xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></i>
</div>



</div>






</div>






</div>

</section>

    </>

  )
}
