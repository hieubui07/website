import React from 'react'
import Footer from "@/app/components/Footer"

function Page () {
  return (
    <div id="contact" className="w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto">
      <h1 className='text-white font-semibold mb-8 text-[14px] text-center'>Contact</h1>
      <div className='text-white text-[12px]'>Feel free to contact me through email at <a href="mailto:hieubui0107@gmail.com" target='_blank' className='underline underline-offset-2'>hieubui0107@gmail.com</a></div>
      <div className='w-full mt-6'>
        <div className='text-white text-[12px]'><a href='/Hieu_Bui_Resume.pdf' target='_blank' className='text-white'>View my Resume </a></div>
      </div>
    </div>
  )
}

export default Page