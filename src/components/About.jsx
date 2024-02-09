import React from 'react'

function About() {
  return (
    <div id='About' className="w-full h-screen bg-[url('./assets/About.png')] bg-cover bg-center snap-center flex justify-center items-center">
        <div className='w-full h-full p-4 md:px-12 lg:px-20 bg-[rgba(0,0,0,.5)] flex flex-col justify-center'>
           
            <div className='flex-row flex items-start justify-start '>
            <img src='https://img.freepik.com/free-vector/wrench-illustration-realistic-3d-metallic-mechanic-tool_33099-523.jpg?w=360&t=st=1707460888~exp=1707461488~hmac=b04e9e17e3190d7512d7ee4fa18bf51256bfafd2e6e901961f953cc8f2354c8d'
            className='rounded-full h-40' alt='image'/>
                <p className='text-orange-500 font-semibold text-[7em]'>WE FIX</p>
            </div>
            <div className='flex-row flex w-full items-end justify-end '>
            <img src='https://cdn.dribbble.com/userupload/9424157/file/original-b5b9574bc754cb793fd80d7fa7a3c6ac.jpg?resize=1024x817'
            className='h-40' alt='image'/>
                <p className='text-orange-500 font-semibold text-[7em]'>WE BUILD</p>
            </div>
            <div className='flex-row flex items-start justify-start'>
            <img src='https://i.pinimg.com/564x/da/1b/c5/da1bc52a5ad8636a1dd597d9e00ac93b.jpg'
            className='w-40' alt='image'/>
                <p className='text-orange-500 font-semibold text-[7em]'>WE SELL</p>
            </div>
        </div>
    </div>
  )
}

export default About