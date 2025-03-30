import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/Projects/Mywork'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
    </div>
  )
}

export default App