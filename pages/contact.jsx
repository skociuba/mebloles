import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Email' message='Wyślij email.' />
        <Contact />
    </div>
  )
}

export default contact