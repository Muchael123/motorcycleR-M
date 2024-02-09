import React from 'react'

function Header() {
  return (
    <div className='pt-5 flex flex-row justify-between items-center'>
        <div className='font-bold text-xl'>Motorcycle <span className='text-orange-500 text-2xl '>R&M</span> shop</div>
        <div>
            <ul className='flex flex-grow divide-x gap-3 items-center font-bold'>
                <li className='text-center mx-2 pl-3 hover:text-orange-500 hover:underline transition-all duration-300 cursor-pointer'><a href='#Home'>Home</a></li>
                <li className='text-center mx-2 pl-3 hover:text-orange-500 hover:underline transition-all duration-300 cursor-pointer'><a href='#About'>About Us</a></li>
                <li className='text-center mx-2  pl-3 hover:text-orange-500 hover:underline transition-all duration-300 cursor-pointer'><a href='#Contact'>Contact Us</a> </li>
            </ul>
        </div>
        <div className='justify-between gap-4  flex flex-row'>
            <button className='border py-2 rounded-md hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out font-bold px-3 bg-white text-black '>Login</button>
            <button className='border py-2 rounded-md bg-blue-500 hover:bg-transparent hover:scale-105 transition-all duration-300 ease-in-out font-bold px-3'>Signup</button>
        </div>
        
    </div>
  )
}

export default Header