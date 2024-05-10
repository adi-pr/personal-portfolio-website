import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image'
import React from 'react'

const About = () => {

  const tabs = [
    {
      title: "Frontend",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-72 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Frontend Skills</p>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-72 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Backend Skills</p>
        </div>
      ),
    },
  ];


  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
        {/* <Image
          src={"/images/about-img.jpg"}
          alt='about image'
          width={500}
          height={500}
        /> */}
        <div className='flex flex-col md:text-left text-center justify-between mt-10'>
          <h2 className='text-4xl font-bold text-white mb-4'>
            About Me
          </h2>
          <p className='text-base lg:text-lg'>
            I'm a full-stack web developer passionate about building interactive and responsive web applications. While I have more experience with front-end technologies like Next.js, Tailwind CSS, and UI libraries such as Material-UI and Shadcn/ui, I'm a quick learner and always eager to expand my skillset. I thrive in collaborative environments and am excited to contribute to creating amazing applications with a talented team.
          </p>
        </div>
        <div>

          <div className='flex flex-row mt-8 gap-2'>
            <div className="md:h-[40rem] h-[20rem] w-full [perspective:1000px]">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About