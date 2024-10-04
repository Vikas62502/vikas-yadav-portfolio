import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";

const LampContainerComponent = () => {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Projects Section
            </motion.h1>
        </LampContainer>
    )
}

export default LampContainerComponent