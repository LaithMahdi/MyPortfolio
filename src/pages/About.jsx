import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#3A1078] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00FFCA]'>About</p>
                </div>

                <div>
                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold sm:text-right'>
                        <p>Hello Clint, it's a pleasure to meet you</p>
                    </div>
                    <div>
                        <p>
                        Junior Flutter developer and UI/UX designer, passionate about creating beautiful user experiences. Combining Flutter development skills with a keen eye for design. Striving to blend functionality with aesthetics, ensuring every pixel serves a purpose. Constantly learning and seeking new challenges to deliver innovative solutions.
                        </p>
                    </div>
                </div>

            
        </div>
    </div>
  )
}

export default About