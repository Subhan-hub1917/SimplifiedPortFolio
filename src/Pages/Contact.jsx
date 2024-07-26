import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div initial={{translateX:'100%'}} animate={{translateX:0}} exit={{translateX:'-100%'}}  transition={{ease:'backInOut',duration:0.5}} className='relative  h-full flex flex-wrap px-8 lg:px-0 justify-center items-center'>
        <div className='relative ballon1 ballon1-animation z-0'>
          <Link to="https://instagram.com/subhan_qamar_2002/?igsh=MXRkYWF5YWtzY2IvNA==" target='_blank'>
            <i className='absolute bi bi-instagram text-pink-700 bg-white rounded-lg text-4xl bottom-0 right-0 z-10'></i>
          </Link>
        </div>
        <div className='ballon2 relative ballon1-animation z-0'>
          <Link to="https://github.com/Subhan-hub1917" target='_blank'>
            <i className='absolute bi bi-github  bg-white rounded-full text-4xl bottom-0 right-14 z-10'></i>
          </Link>
        </div>
        <div className='block md:hidden ballon4 pb-10  relative ballon1-animation z-0'>
          <Link to="https://wa.me/+923420443066" target='_blank'>
            <i className='absolute bi bi-whatsapp text-green-600 bg-white  rounded-full text-4xl bottom-0 right-0 z-10'></i>
          </Link>
        </div>
        <div className='ballon3  relative ballon1-animation z-0'>
          <Link to="https://www.linkedin.com/in/subhan-qamar/965946282?utm_source=share&utm_compaign=share_via&utm_content=profile&utm_medium=adriod_app" target='_blank'>
            <i className='absolute bi bi-linkedin text-blue-600  bg-white text-4xl bottom-0 right-14 z-10'></i>
          </Link>
        </div>
        <div className='hidden md:block ballon4  relative ballon1-animation z-0'>
          <Link to="https://wa.me/+923420443066" target='_blank'>
            <i className='absolute bi bi-whatsapp text-green-600 bg-white  rounded-full text-4xl bottom-0 right-0 z-10'></i>
          </Link>
        </div>
    </motion.div>
  )
}

export default Contact