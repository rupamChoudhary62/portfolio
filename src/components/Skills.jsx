import React from 'react'
import Canva from "../assets/canva.png";
import googleAnalytics from "../assets/googleAnalytics.png";
import googleConsole from "../assets/googleConsole.png";
import rankMath from "../assets/rankMAth.jpg";
import wordpress from "../assets/wordpress.jpg";
import googleAds from "../assets/google ads.svg";
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
const Skills = () => {
      var count=1;
      const icons = [ wordpress, googleAds, googleAnalytics, googleConsole, Canva];

      const Section= {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: ".8rem",
            backgroundColor : "rgb(30,39,56)",
            marginTop: "3rem",
            paddingBottom: "3rem"
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
      const iconsDiv = {
            backgroundColor: "rgb(30,39,56)",
            display:"flex",
            flexDirection:"row",
            gap:"1rem",
            paddingTop:"2.5rem"
      }
      const iconImages = {
            width: "4rem",
            height: "4rem",
            backgroundColor: "rgb(30,39,56)",
      }
      const button = {
            backgroundColor: "#465981",
            color: "white",
            padding:".8rem 1.5rem",
            borderRadius: "3rem",
            border: "none",
            marginTop: "2.5rem"
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
    <section style={Section} className='col-md-6 '>
      <h4 style={background} className='pt-5'>Skills</h4>
      <p className='w-75 text-center pt-3' style={p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque esse rem blanditiis? Commodi, facilis dolore dolorem beatae quae fugiat illo?</p>
      <div style={iconsDiv}>
            {icons.map((icon)=>{
                  return <img src={icon} style={iconImages} key={count++}/>
            })}
      </div>
      <button style={button}><Link style={links} to="/resume">View Resume</Link><ArrowRight style={Arrow} size={25}/></button>
    </section>
  )
}

export default Skills