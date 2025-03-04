"use client"

import React from 'react'
import Footer from "@/app/components/Footer"

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
    <div id="projects" className="w-[75%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative  flex flex-col justify-center m-auto">
      <h1 className='font-semibold text-white mb-4 text-[14px] text-center'>Projects</h1>
      {projectsData.map((project) => (
        <div key={project.id} className='text-white py-4 w-full flex flex-col md:flex-row justify-between space-y-2 md:space-y-0'>
          <div className='flex flex-row'>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='w-[180px] text-blue-700 hover:underline text-[12px]'>
              {project.title}
            </a>
          </div>
          <div className='flex justify-start text-[13px] text-black'>{project.description}</div>
        </div>
      ))}
    </div>
  )
  
}

export default Page