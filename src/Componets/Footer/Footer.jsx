import React from 'react'

export default function Footer() {
  return (
  <>
  
<section className=' bg-[#2C3E50] min-h-[35vh]'>
  <div className='container bg'>

<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-20 items-center justify-center '>



<div className='contact p-2 text-white  text-center text-2xl '>
<h1 className=' font-bold'>LOCATION</h1>

<span>2215 John Daniel Drive</span>
<br />
<span>Clark, MO 65243</span> 
</div>

<div className='contact p-2 text-white text-center text-2xl'>
<h2 className='font-bold'>AROUND THE WEB</h2>
<div className='space-x-4 flex justify-center items-center mt-3'>

<div className=' w-11 h-11 rounded-full text-white border hover:bg-gradient-to-r hover:from-blue-800 hover:via-indigo-800 hover:to-purple-900 hover:shadow-lg hover:scale-110 transform transition duration-300 cursor-pointer  '>
<i class="fa-brands fa-facebook pt-2 "></i>
</div>

<div className='w-11 h-11 rounded-full text-white border hover:bg-gradient-to-r hover:from-blue-800 hover:via-indigo-800 hover:to-purple-900 hover:shadow-lg hover:scale-110 transform transition duration-300 cursor-pointer'>
  <i class="fa-brands fa-linkedin-in pt-2"></i>

</div>

<div className='w-11 h-11 rounded-full text-white border hover:bg-gradient-to-r hover:from-blue-800 hover:via-indigo-800 hover:to-purple-900 hover:shadow-lg hover:scale-110 transform transition duration-300 cursor-pointer'>
  <i class="fa-brands fa-twitter pt-2"></i>
</div>

<div className='w-11 h-11 rounded-full text-white border hover:bg-gradient-to-r hover:from-blue-800 hover:via-indigo-800 hover:to-purple-900 hover:shadow-lg hover:scale-110 transform transition duration-300 cursor-pointer'>
  <i class="fa-solid fa-globe pt-2"></i>
</div>




</div>

</div>


<div className='contact p-2 text-white text-center space-y-1'>
<h4 className='font-bold text-3xl'>ABOUT FREELANCER</h4>
<span>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</span>
</div>





</div>

  </div>
</section>




<section className='bg-[#1A252F] min-h-[10vh] flex justify-center items-center'>


<div className='flex justify-center items-center space-x-1 text-white '>
<span>
  Copyright
</span>

<div class="flex items-center justify-center h-6 w-6   rounded-full bg-blue-900 border border-white hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-900 hover:shadow-lg transition duration-300 cursor-pointer">
  <span class="text-white font-bold text-xs">C</span>
</div>

<span>
   Your Website 2021
</span>

</div>


</section>




  </>
  )
}
