import React from 'react'
import gip from './giphy-backdrop.gif'

export default function Hero() {
  return (
    <div>
         <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Gain <span style={{'color':'rgb(20, 143, 128)'}}>access </span>  to
        <br className="hidden lg:inline-block"/>Anyone, Anytime,<br className="hidden lg:inline-block"/>
        for Anything
      </h1>
      <p className="mb-8 md:mt-3 md:text-3xl text-xl">
      Unikon.<span style={{'color':'rgb(20, 143, 128)'}}>ai</span> is a platform which enables

you to monetise your time and knowledge.
        </p>
        
           <div className="flex justify-center">
       </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={gip}/>
    </div>
  </div>
</section>

    </div>
  )
}
