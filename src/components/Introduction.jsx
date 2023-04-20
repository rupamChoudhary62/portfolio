import React from 'react'
import RupamImage from "../assets/rupam.png"
import { ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const Introduction = () => {

      const Section= {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: ".8rem",
            backgroundColor : "rgb(30,39,56)",
            marginTop: "7rem"
      }
      const background = {
            backgroundColor : "rgb(30,39,56)",
            color:"white",     
      }
      const p={
            color: "#a5b3ce",
            backgroundColor : "rgb(30,39,56)",
            lineHeight: "1.6rem"
      }
      const Image={
            height: "10rem",
            width: "8.5rem",
            borderRadius: "80%",
            marginTop: "-5rem",
            backgroundColor: "rgb(30,39,56)"
      }
      const button = {
            backgroundColor: "#465981",
            color: "white",
            padding:".8rem 1.5rem",
            borderRadius: "3rem",
            border: "none",
            margin: " 1rem 0 2rem 0"
      }
      const Arrow = {
            backgroundColor: "#465981",
            color: "white",
            paddingLeft: ".4rem"
      }
      const links = {
            backgroundColor: "#465981",
            textDecoration:"none",
            color:"white"
      }

  return (
    <section style={Section} className='col-md-6'>
      <img src={RupamImage} style={Image} alt='Rupam Choudhary'/>
      <h4 style={background} className='pt-4'>Rupam Choudhary</h4>
      <p style={ p} className='w-75 text-center pt-3'>I am a self-motivated, hardworking individual that strives for excellence in all parts of life and has a constant desire to climb the career ladder. 
      Seeking a challenging career in my field of experience, as well as a place where my creative abilities will bring value.
      </p>
      <button style={button}><Link style={links} to="/resume">View Resume</Link><ArrowRight style={Arrow} size={25}/></button>
    </section>
  )
}

export default Introduction