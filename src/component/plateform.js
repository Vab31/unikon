import React from 'react';

export default function Plateform() {
  let val = [
    {
      img: 'https://unikon.ai/professionals.svg',
      title: 'Professionals',
      des: 'Build and expand your network to gain relevant knowledge and expertise',
    },
    {
      img: 'https://unikon.ai/students.svg',
      title: 'Students',
      des: 'Seek advice from seasoned professionals across multiple domains',
    },
    {
      img: 'https://unikon.ai/founders.svg',
      title: 'Founders',
      des: 'Present your innovative startup ideas to entrepreneurs and VCs for investments and guidance',
    },
    {
      img: 'https://unikon.ai/hrreps.svg',
      title: 'HR reps',
      des: 'Reach out to potential candidates to facilitate organisational growth',
    },
    {
      img: 'https://unikon.ai/contentcreators.svg',
      title: 'Content Creators',
      des: 'Monetise from your followers by providing personalised guidance in your niche',
    },
    {
      img: 'https://unikon.ai/jobseekers.svg',
      title: 'Content Creators',
      des: 'Build and broaden your network to secure a job in your dream company',
    },
    {
      img: 'https://unikon.ai/industryexperts.svg',
      title: 'Industry experts',
      des: 'Monetise your skills in your free time while building your personal brand',
    },
    {
      img: 'https://unikon.ai/freelancer.svg',
      title: 'Freelancer',
      des: 'Find opportunities and control when, where and how you work ....',
    },
  ];

  return (
    <div>
      <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-6xl text-2xl font-bold mb-2 text-gray-900">
              A <span style={{ color: 'rgb(20, 143, 128)' }}> platform</span> for everyone
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {val.map((v, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4 " aria-label={`card-sec-${index}`} key={index}  data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              >
                <div className="border shadow-md  bg-slate-50 border-gray-200 p-6 rounded-lg transition transform hover:scale-105">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <img src={v.img} alt={`${v.title} Icon`} />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{v.title}</h2>
                  <p className="leading-relaxed text-base">{v.des}</p>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </section>
    </div>
     
  );
}
