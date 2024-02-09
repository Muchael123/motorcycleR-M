import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='snap-mandatory snap-y overflow-x-hidden'>
      <div className='fixed top-0 z-50 text-white w-full px-4 md:px-12 lg:px-20'>
        <Header/>
        <hr class="h-px  my-8 bg-gray-200 border-0 dark:bg-gray-700 animate-pulse"></hr>
        </div>
      <div className="bg-[url('./assets/download1.jpg')] snap-start relative bg-cover bg-center w-full h-screen">
      <div className='w-full px-4 md:px-12 lg:px-20 h-full bg-[rgba(0,0,0,.8)] text-white flex flex-col'>
        {/* header */}
        
        <Hero/>
        
      </div>
      <About/>
      <Contact/>
</div>

    </div>
  )
}

export default App
