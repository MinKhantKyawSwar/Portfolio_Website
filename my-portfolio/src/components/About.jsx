import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"; // Ensure you import from 'framer-motion'

const About = () => {
  return (
    <div className='w-2xl border-b border-neutral-900 flex flex-col items-center'>
        <h1 className="lg:pt-0 pt-20 my-20 text-center text-4xl">
            About <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='flex flex-wrap justify-center'>

            <motion.div 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration: 0.8, delay:0.3}}
            className="w-full lg:w-3/4 max-w-4xl" >
                <div className="flex justify-center">
                    <p className="my-2 max-w-xl py-6 text-center text-lg leading-relaxed">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default About;