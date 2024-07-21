import './index.css' 
import './App.css' 
import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Skills from './Pages/Skills.jsx'
import {BrowserRouter as Router ,Routes,Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Projects from './Pages/Projects.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import Contact from './Pages/Contact.jsx'
export default function App() {
  const location = useLocation()
  const [active,setActive]=useState('/')
  return (
  <div className='h-screen overflow-x-hidden unselected'>  
    <Navbar active={active} setActive={setActive}/>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </AnimatePresence>
  </div>
  
);
}






