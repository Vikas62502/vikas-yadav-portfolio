"use client";

import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { handleMailTo } from "@/utils/handleMailTo";
import { downloadCv } from "@/utils/handleDownloadCv";


const HeroSection = () => {
    return (
        <div className='container bg-black border-b-2'>
            <div>
                <BackgroundBeamsWithCollision>
                    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
                        <div className=" mx-auto"><Image
                            src="/VikasYadavProfilePicture.jpg"
                            alt="Vikas Yadav Profile Picture"
                            width={200}
                            height={200}
                            className="size-60 rounded-full object-cover mx-auto mb-6"
                        /></div>
                        Turning ideas into real-world applications with
                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Full Stack and Web3 expertise</span>
                            </div>
                            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                <span className="">Full Stack and Web3 expertise</span>
                            </div>

                        </div>
                        <div className="container mx-auto my-5">
                            <div className="flex justify-center space-x-16 sm:text-sm md:text-lg">
                                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-8 rounded-full mt-8" onClick={handleMailTo}>
                                    Get in touch
                                </button>
                                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-8 rounded-full mt-8" onClick={downloadCv}>
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </h2>

                </BackgroundBeamsWithCollision>
            </div>

        </div>
    )
}

export default HeroSection