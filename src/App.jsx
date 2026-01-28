// import React from 'react'

import About from "./components/About"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"
import Features from "./components/Features"
import Story from "./components/Story"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Showcase from "./components/Showcase"
// import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
// import Test from "./components/Test"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Showcase />
      {/* <Testimonials /> */}
      <Story />
      <Newsletter />
      {/* <Test /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default App
