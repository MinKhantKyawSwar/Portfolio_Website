import {RiReactjsLine, RiJavascriptFill, RiJavaFill} from "react-icons/ri"
import {SiMongodb, SiExpress,SiTailwindcss } from "react-icons/si"
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { motion } from "motion/react"

const iconVarients = (duration) =>({
    initial :{y: -10},
    animate : {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:2}} className='my-20 text-center text-4xl'>Tech Stacks</motion.h1>
        <motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:2}}
            className='flex flex-warp items-center justify-center lg:gap-20 gap-6'>
                <motion.div variants={iconVarients(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-'>
                    <SiTailwindcss className="text-7xl text-cyan-300"/>
                </motion.div>
                <motion.div variants={iconVarients(3)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-'>
                    <RiJavascriptFill className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div  variants={iconVarients(2)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-'>
                    <RiJavaFill className="text-7xl text-neutral-50"/>
                </motion.div>
                <motion.div variants={iconVarients(6)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-'>
                    <FaPhp className="text-7xl text-blue-700"/>
                </motion.div>
                <motion.div variants={iconVarients(4)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-'>
                    <AiOutlinePython className="text-7xl text-white"/>
                </motion.div> 
                
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:2}}
            className='flex flex-warp items-center justify-center lg:gap-20 gap-6 mt-10 '>
                <motion.div  variants={iconVarients(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-'>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div  variants={iconVarients(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-'>
                    <FaNodeJs className="text-7xl text-green-400"/>
                </motion.div>
                <motion.div  variants={iconVarients(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-'>
                    <SiExpress className="text-7xl text-white"/>
                </motion.div>
                <motion.div  variants={iconVarients(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-'>
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div  variants={iconVarients(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-'>
                    <GrMysql className="text-7xl text-blue-500"/>
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies