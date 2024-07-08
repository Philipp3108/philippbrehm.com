import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:contact@philippbrehm.com">
                <MagicButton
                    title='Let&apos;s get in touch'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Philipp</p>
            <div className='flex items-center md:gap-3 gap-6'>
               {socialMedia.map((profile) => (
                  <Link key={profile.id} href={profile.link}>
                    <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                      <img src={profile.img} alt={profile.link} width={20} height={20}/>
                    </div> 
                  </Link>
               ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
