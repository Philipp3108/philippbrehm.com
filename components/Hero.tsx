import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { socialMedia } from '@/data'
import Link from 'next/link'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id='home'>
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Back-End Systems with Node.js</h2>

                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Transforming Concepts into Efficient Back-End Systems'
                />

                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi, I&apos;m Philipp, a Student living in Germany
                </p>

                <div className='flex mt-6'>
                    {socialMedia.map((profile) => (
                    <Link key={profile.id} href={profile.link} target='_blank'>
                        <div className='w-12 h-12 mx-2 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <profile.icon size={20}/>
                        </div> 
                    </Link>
                    ))}
                </div>

                <a href="#projects">
                    <MagicButton
                        title="View my work " icon={<FaLocationArrow />} position={'right'} className='mt-10'
                    />
                </a>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero
