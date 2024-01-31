import React from "react"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
const contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Email" message="Wyślij email." />
      <Contact />
    </div>
  )
}

export default contact
