"use client";

import Image from 'next/image'
import React from 'react'
import ProfilePicture from "../assets/VikasYadavProfilePicture.jpg"
import { ThreeDCardDemo } from './3dCardView'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const HeroSection = () => {
    return (
        <div className='container bg-black'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-5xl text-white'>Vikas Yadav</h1>
                    <p className='text-2xl text-white'>Full Stack Developer || Web 3.0 Enthusiast</p>
                </div>
                <div>
                    {/* <Image src={ProfilePicture} alt='profile-picture-Vikas-Yadav' width={500} height={500} /> */}
                    <ThreeDCardDemo />
                </div>
            </div>
        </div>
    )
}

export default HeroSection