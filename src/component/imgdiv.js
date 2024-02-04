// import React from 'react'
// import im from './img.png'

// export default function Imgdiv() {
//   return (
//     <div>

// <section className="text-gray-600 body-font">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">The <span style={{ color: 'rgb(20, 143, 128)' }}>Amazon</span> of people
//         <br className="hidden lg:inline-block"/>
//       </h1>
//       <p className="mb-8 text-2xl md:text-3xl">
//       Everyone is rated and reviewed. Build your credibility by creating a real-world impact on the platform.


//       </p>
//       <div className="flex justify-center">
//      </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img className="object-cover object-center rounded" alt="hero" src={im}/>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }


// import React from 'react';
// import im from './img.png';

// export default function Imgdiv() {
//   return (
//     <div>
//       <section className="text-white body-font bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
//               The <span style={{ color: 'rgb(20, 143, 128)' }}>Amazon</span> of people
//               <br className="hidden lg:inline-block" />
//             </h1>
//             <p className="mb-8 text-2xl md:text-3xl">
//               Everyone is rated and reviewed. Build your credibility by creating a real-world impact on the platform.
//             </p>
//             <div className="flex justify-center"></div>
//           </div>
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//             <img className="object-cover object-center rounded-full" alt="hero" src={im} />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import im from './img.png';

export default function Imgdiv() {
  return (
    <div>
      <section className="text-gray-600 body-font relative ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
              The <span style={{ color: 'rgb(20, 143, 128)' }}>Amazon</span> of people
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 text-2xl md:text-3xl">
              Everyone is rated and reviewed. Build your credibility by creating a real-world impact on the platform.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative bg-gradient-to-r from-green-500 via-emerald-600-500 to-blue-500 rounded-full p-5 rounded" >
            <div className=" overflow-hidden border-8 rounded-full  border-white">
              <img className="object-cover object-center w-full h-full rounded-full" alt="hero" src={im} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
