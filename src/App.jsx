import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Intro from './intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Others from './Others/Others'
import Footer from './Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const [jp,setJp] = useState(false)

  function changeToJp(){
    setJp((prevState)=> !prevState)
  }
  return (
    <>
   <Navbar jp={jp} changeToJp={changeToJp}/> 
    <Intro jp={jp}/> 
    <About jp={jp}/>
    <Skills jp={jp}/>
    <Projects jp={jp}/>
    <Others jp={jp}/>
    <Footer/> 
    </>
  )
}

export default App
