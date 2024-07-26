import { NavLink } from "react-router-dom"

const Navbar=({active,setActive})=> {
  return (
    <>
    <nav className='container md:hidden '>
      {/* mobile */}
          <ul  className=' py-2 flex flex-wrap items-center justify-center text-lg font-medium space-x-3 outfit-regular'>
            <NavLink to='/' onClick={()=>setActive('/')}><li className={`${active=='/' ? 'border border-gray-700 bg-black px-2 text-white rounded-full':'border border-gray-700 hover:bg-black px-2 hover:text-white rounded-full'} `}>Home</li></NavLink>
            <NavLink to='/Skills' onClick={()=>setActive('/Skills')}><li className={`${active=='/Skills' ? 'border border-gray-700 bg-black px-2 text-white rounded-full' : 'border border-gray-700 hover:bg-black px-2 hover:text-white rounded-full'}`}>Skills</li></NavLink>
            <NavLink to='/Projects' onClick={()=>setActive('/Projects')}><li className={`${active=='/Projects'?'border border-gray-700 bg-black px-2 text-white rounded-full':'border border-gray-700 hover:bg-black px-2 hover:text-white rounded-full'}`}>Projects</li></NavLink>
            <NavLink to='/Contact' onClick={()=>setActive('/Contact')}><li className={`${active=='/Contact' ? 'border border-gray-700 bg-black px-2 text-white rounded-full':'border border-gray-700 hover:bg-black px-2 hover:text-white rounded-full'}`}>Contact</li></NavLink>
          </ul>
      </nav>
      <nav className='hidden md:flex  items-center justify-center sticky'>
          <ul  className=' py-2 flex flex-wrap items-center justify-center text-lg font-medium lg:space-x-5 space-x-2 '>
            <NavLink to='/' onClick={()=>setActive('/')}><li className={` ${active=='/' ? 'border border-gray-700 bg-black px-12 text-white rounded-full':'border border-gray-700 hover:bg-black px-12 hover:text-white rounded-full'} `}>Home</li></NavLink>
            <NavLink to='/Skills' onClick={()=>setActive('/Skills')}><li className={`${active=='/Skills' ? 'border border-gray-700 bg-black px-12 text-white rounded-full' : 'border border-gray-700 hover:bg-black px-12 hover:text-white rounded-full'}`}>Skills</li></NavLink>
            <NavLink to='/Projects' onClick={()=>setActive('/Projects')}><li className={`${active=='/Projects' ? ' border border-gray-700 bg-black px-12 text-white rounded-full ':'border border-gray-700 hover:bg-black px-12 hover:text-white rounded-full'}`}>Projects</li></NavLink>
            <NavLink to='/Contact' onClick={()=>setActive('/Contact')}><li className={`${active=='/Contact' ? 'border border-gray-700 bg-black px-12 text-white rounded-full ':'border border-gray-700 hover:bg-black px-12 hover:text-white rounded-full'}`}>Contact</li></NavLink>
          </ul>
      </nav>
    </>
    
  )
}

export default Navbar