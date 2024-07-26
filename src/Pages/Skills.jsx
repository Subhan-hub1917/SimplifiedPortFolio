import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <motion.div  initial={{translateX:'100%'}} animate={{translateX:0}} exit={{translateX:'-100%'}} transition={{ease:'backInOut',duration:0.5}}  className='h-full flex items-center justify-center'>
      <div className='relative text-center'>
          <h1 className='relative  text-8xl  font-black stroke-black z-20 outfit-regular'>Skills</h1>
          <div className='absolute bg-black h-3 top-20 left-0 blur-md w-full'></div>
          <div className='absolute top--50 left--20 image3 z-10'></div>
          <div className='absolute top-12 right-10 image2 z-30'></div>
      </div>
        <motion.div animate={{rotateY:-40,rotateZ:-5,rotateX:30}} className='absolute rounded-lg text-lg md:text-2xl stroke-2 top-20 lg:top-40 left-16 px-2 py-2 lg:px-10 lg:py-10 bg-black  text-white'>
            <div className='project absolute bg-black h-5 bottom-0 left-0 blur-md w-full'></div>  
              <h2>React js</h2>
              <h2>Nodejs</h2>
              <h2>Mongodb</h2>
              <div></div>
        </motion.div>
        <motion.div animate={{rotateX:40}} className='hidden lg:block absolute rounded-lg lg:text md:text-2xl stroke-2 top--50  px-5 py-5 lg:px-10 lg:py-10 bg-black  text-white'>
            <div className='project absolute bg-black h-5 bottom-0 left-0 blur-md w-full'></div>  
              <h2>MERN</h2>
              <h2>Stack</h2>
              <h2>Developer</h2>
              <div></div>
        </motion.div>
        <motion.div animate={{rotateY:40,rotateZ:5,rotateX:30}} className='absolute rounded-lg text-lg md:text-2xl stroke-2 top-20 lg:top-40 right-16 px-2 py-2  lg:px-10 lg:py-10 bg-black  text-white'>
            <div className='project absolute bg-black h-5 bottom-0 left-0 blur-md w-full'></div>  
              <h2>Nextjs</h2>
              <h2>Firebase</h2>
              <h2>Css Frame</h2>
        </motion.div>
    </motion.div>
  )
}

export default Skills