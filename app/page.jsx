import React from 'react'
import { About, HeroSection, Navbar } from './_components'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar /> 
      <div className='container mt-28 mx-auto px-12 py-4'>
        <HeroSection />
        <About />
      </div> 
    </div>
  )
}

export default Home