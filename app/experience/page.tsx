
import React from 'react'

const experienceData = [
    {
        id: '1',
        place: 'University of Houston',
        title: 'Teaching Assistant',
    },
    {
        id: '2',
        place: 'University of Houston',
        title: 'Information Technology',
    },
]

const leadershipData = [
    {
        id: '1',
        place: 'Code[Coogs]',
        title: 'Vice President External',
        link: 'https://www.codecoogs.com/',
    },
    {
        id: '2',
        place: 'SASE UH',
        title: 'Mentor',
        link: 'https://www.uh-sase.org/',
    },
]

function Page () {
  return (
    <div id="projects" className="relative w-[75%] md:w-[40%] z-[1] h-[calc(100vh_-_8rem_-_35px)] flex flex-col justify-center items-start mx-auto">
      <h1 className='font-semibold text-white mb-6 text-2xl'>Experience</h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className='text-white py-4 w-full flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <div className='flex flex-row space-x-0 md:space-x-4'>
            <div className='w-[180px] text-neutral-400 hover:underline'>
              {experience.place}
            </div>
          </div>
          <div className=''>{experience.title}</div>
        </div>
      ))}
      <h1 className='font-semibold text-white mt-6 mb-6 text-2xl'>Leadership</h1>
      {leadershipData.map((leadership) => (
        <div key={leadership.id} className='text-white py-4 w-full flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <div className='flex flex-row space-x-0 md:space-x-4'>
            <a href={leadership.link} target="_blank" rel="noopener noreferrer" className='w-[180px] text-neutral-400 hover:underline'>
              {leadership.place}
            </a>
          </div>
          <div className='text-center'>{leadership.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Page
