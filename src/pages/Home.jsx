import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-indigo-700'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-50'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-sky-300'>Mahdi Laith</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-zinc-50'>I'am UI/UX designer and Junior flutter developer</h2>
            <p className='text-gray-300 py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet perspiciatis aperiam quae obcaecati molestiae inventore molestias nemo, atque fugit.</p>
            <div>
                <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-300 hover:border-sky-300 rounded-sm'>View Work <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-4' /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Home