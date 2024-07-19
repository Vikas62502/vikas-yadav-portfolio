"use client";

import Image from 'next/image'
import React from 'react'
import ProfilePicture from "../assets/VikasYadavProfilePicture.jpg"
import { ThreeDCardDemo } from './3dCardView'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card';

const HeroSection = () => {
    return (
        <div className='container bg-black'>
            {/* <div className="flex justify-between items-center"> */}
            <div className="flex items-center justify-around bg-[#0E0E10] h-screen rounded-2xl w-full">
                <TextRevealCard
                    text="Vikas Yadav"
                    revealText="Full Stack Web 3.0 Developer"
                >
                    <TextRevealCardTitle>
                        Vikas Yadav
                    </TextRevealCardTitle>
                    <TextRevealCardDescription>
                        Full Stack Web 3.0 Developer
                    </TextRevealCardDescription>
                </TextRevealCard>

                <div>
                    <ThreeDCardDemo />
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default HeroSection