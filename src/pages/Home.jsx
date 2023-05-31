import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#3A1078]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-50 text-lg'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#00FFCA]'>Mahdi Laith</h1>
            <h2 className='text-4xl sm:text-4xl font-bold text-zinc-50 pt-2'>I'am UI/UX designer and Junior flutter developer</h2>
            <p className='text-gray-300 py-4 '>
              with a passion for creating captivating user experiences, I specialize in developing mobile applications using Flutter while incorporating appealing design principles
            </p>
            <div>
                <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold'>View Work <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-4' /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Home