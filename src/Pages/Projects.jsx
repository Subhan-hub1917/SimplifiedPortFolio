
import { motion, useScroll, useTransform } from 'framer-motion'
import { card } from '../Constants/constants'
import { useEffect, useState } from 'react';
const Projects = () => {

  const {scrollYProgress}=useScroll();
  const  size=useTransform(scrollYProgress,[0,1],[1,0.5])
  const  Y=useTransform(scrollYProgress,[0,1],[0,-200])
  const  opacity=useTransform(scrollYProgress,[0,1],[1,0])
  const  rotate=useTransform(scrollYProgress,[0,1],[1,0.5])
  const [showArrow, setShowArrow] = useState(false);

  const handleYProgress=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <motion.div  initial={{translateX:'100%'}} animate={{translateX:0,}} exit={{translateX:'-100%'}}  transition={{ease:'backInOut',duration:0.3}} className='flex flex-wrap justify-center items-center px-8 py-10 gap-x-3 gap-y-10 relative'>
        {
          card.map((item)=>(
            <motion.div 
              initial={{rotateX:40,rotateY:0}} animate={{rotateX:40,rotateY:40}} whileInView={{rotateX:0,rotateY:0}} className='relative overflow-hidden bg-black rounded-lg border border-black unselected  parent-card '>
                <motion.img src={item.link}  height={800} width={400} style={{objectFit:'fill'}} className='hover:opacity-[0.2] '/>
                <div className='absolute text-white p-2  child-card'>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <p className='font-thin'>{item.content  }</p>
                </div>
            </motion.div>

          ))
        }
        { showArrow && (
              <button className='fixed right-5 bottom-10' onClick={handleYProgress}>
                <i className='text-4xl bi bi-arrow-up-circle-fill'></i>
              </button>
          )}
    </motion.div>
  )
}

export default Projects