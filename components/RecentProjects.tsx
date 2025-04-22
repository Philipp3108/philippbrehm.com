import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <section id='projects'>
      <div className='py-20'>
        <h1 className='heading'>
          A small selection of {' '}
          <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
          {projects.map(({ id, title, des, img, link }) => (
            // Der Link wird jetzt um den gesamten Inhalt gewickelt
            <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
              <Link href={link} passHref>
                <PinContainer title={title}>
                  <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[20vh] mb-10'>
                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img src={img} alt={title} className='z-10 absolute bottom-0' />
                  </div>
                  <h1 className='font-bold lg:text-xl text-base line-clamp-1'>
                    {title}
                  </h1>
                  <p className='lg:font-normal font-light md:text-sm line-clamp-2'>
                    {des}
                  </p>
                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </div>
                </PinContainer>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
