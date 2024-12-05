import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                        <motion.img
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:1}} 
                        src={project.image} 
                        alt={project.title} 
                        width={250} 
                        height={150} 
                        className='mb-6 rounded sm:w-full'/>
                        </a>
                    </div>
                    <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}} 
                    className='w-full max-w-xl lg:w-3/4 lg:ml-20'>
                        <h6 className="mb-2 font-semibold">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                                {project.title}
                            </a>
                        </h6>
                        <p className="mb-4 text-neutral-50">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 rounded-lg bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-500'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects