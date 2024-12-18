"use client"

import React from 'react'


const projectsData = [
  {
    id: '1',
    title: 'onetimeimages',
    description: 'A website designed to upload an image to a cloud server where you can retrieve or delete it.',
    link: "https://hackutd2024.vercel.app/",
  },
  {
    id: '2',
    title: 'Welfare for Workers',
    description: 'A friendly user website designed for construction workers to find the nearest psychiatrists.',
    link: "https://hacktx23-welfareforworkers.streamlit.app/",
  },
  {
    id: '3',
    title: 'AutoRemind',
    description: 'A website used to track car maintenance and services.',
    link: "https://github.com/hieubui07/autoremind-hackuta023",
  },
];

function Page () {
  return (
    <div id="projects" className="relative w-[75%] md:w-[40%] z-[1] h-[calc(100vh_-_8rem_-_35px)] flex flex-col justify-center m-auto ">
      <h1 className='font-semibold text-white mb-8 text-2xl'>Projects</h1>
      {projectsData.map((project) => (
        <div key={project.id} className='text-white py-4 w-full flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <div className='flex flex-row space-x-0 md:space-x-4'>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='w-[180px]'>
              {project.title}
            </a>
          </div>
          <div className=''>{project.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Page