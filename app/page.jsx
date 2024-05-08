import React from 'react'
import { HeroSection } from './_components'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#121212]'>
      <div className='container mx-auto px-12 py-4'>
        <HeroSection />
      </div> 
    </div>
  )
}

export default Home