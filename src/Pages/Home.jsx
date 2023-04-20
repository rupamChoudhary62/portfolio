import React from 'react'
import Featured from "../components/Featured"
import Footer from '../components/FooterDiv'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
const Home = () => {
  return (<>
      <Header className="component"/>
      <Introduction className="component"/>
      <Featured/>
      <Skills/>
      <Footer/>
  </>
  )
}

export default Home