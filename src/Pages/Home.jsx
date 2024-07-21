import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div initial={{translateX:'100%'}} animate={{translateX:0}} exit={{translateX:'-100%'}}  transition={{ease:'backInOut',duration:0.5}} className='relative h-full flex items-center justify-center '>
      <div className='relative text-center'>
          <h1 className='relative  text-8xl  font-black stroke-black z-10'>Subhan</h1>
          <div className='absolute bg-black h-3 top-20 left-0 blur-md w-full'></div>
          <div className='absolute top--30 left--10 image1 z-0'></div>
          <div className='absolute top--100 left-24 image4 z-0'></div>
          <div className='absolute top-12 right-10 image2 z-20'></div>
      </div>
      <div className='absolute top-10 right-0 cloud z-50'></div>
      <div className='absolute top-10 right-28 cloud2 z-50'></div>
    </motion.div>
  )
}

export default Home