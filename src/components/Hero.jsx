import React from 'react'

function Hero() {
  return (
    <div id='Home' className='flex flex-row mt-12 items-center justify-center  w-full h-full'>
        <div className='justify-center items-center p-4'>
        <h1 className='text-5xl font-bold w-full text-center'>Let's Ride the {'\n'}</h1>
        <h2 className='text-[150px] font-bold w-full animate-pulse text-orange-500 tracking-[20px]'>FUTURE</h2>
        <h3 className='font-thin text-[30px] w-full text-center'>Wake up to a new journey everyday</h3>
        <div className='w-full flex flex-row justify-center items-center gap-5 mt-5'>
            <button className='text-lg py-4 px-8 font-serif rounded-tl-2xl bg-orange-500 hover:bg-transparent transition-all duration-300 ease-in-out hover:scale-110 border hover:border-3'>Get started</button>
            <button className='text-lg py-4 px-8 rounded-br-2xl font-mono bg-white hover:bg-transparent transition-all duration-300 ease-in-out hover:scale-110 border hover:border-3 hover:text-white text-black'>Sign In</button>
        </div>
        </div>
        
    </div>
  )
}

export default Hero