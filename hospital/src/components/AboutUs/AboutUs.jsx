import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../Home/About'
import Companies from '../Home/Companies'

const AboutUs = () => {
  return (
    <>
      <Header title="About The Mukti" page="Home" info="About"/>
      <About/>
      <Companies black={'true'}/>
      <Footer/>
    </>
  )
}

export default AboutUs
