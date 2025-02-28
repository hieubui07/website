
import React from 'react'
import Footer from "@/app/components/Footer"

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
    <><div id="experience" className="w-[75%] md:w-[60%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto">
      {/* Experience */}
      <h1 className='font-semibold text-white mb-4 text-[15px] text-center'>Experience</h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className='text-black text-[13px] py-2 w-full flex flex-col justify-start md:flex-row space-y-2 md:space-y-0'>
          <div className='flex flex-row space-x-0 md:space-x-4'>
            <div className='w-[220px] items-start'>
              {experience.place}
            </div>
          </div>
          <div>{experience.title}</div>
        </div>
      ))}

      {/* Leadership */}
      <h1 className='font-semibold text-white my-4 text-[15px] text-center'>Leadership</h1>
      {leadershipData.map((leadership) => (
        <div key={leadership.id} className='text-black text-[13px] py-2 w-full flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <div className='flex flex-row items-center space-x-0 md:space-x-4'>
            <a href={leadership.link} target="_blank" rel="noopener noreferrer" className='w-[180px] text-black hover:underline'>
              {leadership.place}
            </a>
          </div>
          <div>{leadership.title}</div>
        </div>
      ))}
    </div><Footer /></>
  )
}

export default Page
