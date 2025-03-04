
import React from 'react'
import Footer from "@/app/components/Footer"

const experienceData = [
    {
        id: '1',
        place: 'Peterbilt Motors Company',
        title: 'Technology Intern',
        date: 'May 2025 - Aug 2025',
    },
    {
        id: '2',
        place: 'University of Houston',
        title: 'Teaching Assistant',
        date: 'Aug 2024 - Present',
    },
    {
      id: '3',
      place: 'University of Houston',
      title: 'Information Technology',
      date: 'May 2023 - Aug 2024',
    },
    
]

const leadershipData = [
    {
        id: '1',
        place: 'Code[Coogs]',
        title: 'Vice President External',
        link: 'https://www.codecoogs.com/',
        date: 'May 2023 - May 2024',
    },
    {
      id: '2',
      place: 'SASE UH',
      title: 'Mentor',
      link: 'https://www.uh-sase.org/',
      date: 'Aug 2024 - Present',
  },
]

function Page () {
  return (
    <div id="experience" className="w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto">
      {/* Experience */}
      <h1 className='font-semibold text-white mb-4 text-[14px] text-center'>Experience</h1>
      {experienceData.map((experience) => (
        <div key={experience.id} className='text-black text-[12px] flex flex-row justify-between'>
          <div className='flex flex-col justify-start pb-4'>
            <div className='text-red-600 pb-2'>{experience.place}</div>
            <div className='text-[12px]'>{experience.title}</div> 
          </div>
          <div className='flex justify-end text-right pl-6 text-[10px]'>{experience.date}</div>
        </div>
      ))}

      {/* Leadership */}
      <h1 className='font-semibold text-white mt-4 text-[14px] text-center'>Leadership</h1>
      {leadershipData.map((leadership) => (
        <div key={leadership.id} className='text-black flex flex-row justify-between'>
          <div className='flex flex-col items-start pb-4'>
            <a href={leadership.link} target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline text-[13px] pb-2'>
              {leadership.place}
            </a>
            <div className='text-[12px]'>{leadership.title}</div>
          </div>
          <div className='flex justify-end text-right pl-6 text-[10px]'>{leadership.date}</div>
        </div>
      ))}
    </div>
  )
}

export default Page
