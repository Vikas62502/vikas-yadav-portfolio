import React from 'react'
import SparkleHeading from './SparkleHeading'
import ProjectCards from './ProjectCards'

const projectCardData = [
    {
        title: 'CBPL Agent App',
        href: 'https://play.google.com/store/apps/details?id=com.chairbord&hl=en',
        description: 'A mobile app for agents to manage their business and customers of fastags.',
    },
    {
        title: 'Green origin',
        href: 'https://greenorigin.org/',
        description: ' Developed a blockchain-powered supply chain tracking platform for crops. ',
    },
    {
        title: 'Spyne Backend',
        href: 'https://github.com/Vikas62502/spyne-backend',
        description: 'Developed Node.js backend with microservices and architecture diagrams.',
    }
]


const ProjectsSection = () => {
    return (
        <div className='container bg-black'>
            <SparkleHeading title="Projects" />
            <div className="h-[40rem] w-full flex items-center justify-center ">
                {projectCardData && projectCardData.map((project, index) => (
                    <ProjectCards
                        key={index}
                        title={project.title}
                        href={project.href}
                        description={project.description}
                    />
                ))}
            </div>


        </div>
    )
}

export default ProjectsSection