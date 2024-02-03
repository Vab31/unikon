import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className='bottom  bg-slate-900 '>
           
           <img className='ml-auto mr-auto p-6' src='https://unikon.ai/light-logo.svg'/>
           <br/>
           <div className='flex'>
           <div>
           <p className='text-gray-100 ml-28 text-left'>
           support@unikon.ai<br/>
           Plot No. 417, Ground Floor, 
           Udyog Vihar, DLF Phase 3, Sector 20, <br/>
           Gurugram, Haryana 122008
           </p>
           </div>
           <div className='ml-auto mr-28'>
           <img className=' w-80'  src='https://unikon.ai/startupIndia.png'/>
           </div>
           </div>
           <hr className='ml-28 mr-28' style={{ borderTop: '2px solid white' }} />
           <footer class="text-gray-600 body-font">
  <div class="container py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100">
    All rights reserved © 2024 Unikon Innovations Private Limited
    </a>
  
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-100">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      
      <a class="ml-3 text-gray-100">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
        </footer>
    </div>
  )
}
