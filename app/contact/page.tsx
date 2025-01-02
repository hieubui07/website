import React from 'react'

function Page () {
  return (
    <div id="contact" className="relative w-[75%] md:w-[40%] z-[1] h-[calc(100vh_-_8rem_-_35px)] flex flex-col justify-center items-start mx-auto">
      <h1 className='text-white font-semibold mb-8 text-xl'>Contact</h1>
      <div className='text-white'>Feel free to contact me through email at <a href="mailto:hieubui0107@gmail.com" target='_blank' className='underline underline-offset-2'>hieubui0107@gmail.com</a></div>
      <div className='w-full mt-6'>
        <button className='text-white text-xl rounded-md border-solid border-[5px] bg-indigo-700 border-indigo-700 hover:bg-indigo-800 hover:border-[5px]'><a href='/Hieu_Bui_Resume.pdf' target='_blank'>Resume</a></button>
      </div>
    </div>
  )
}

export default Page