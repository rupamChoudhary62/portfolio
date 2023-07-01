import React from 'react'
import blogImage1 from "../assets/blog-img-1.png";
import blogImage2 from "../assets/blog-img-2.png"
import blogImage3 from "../assets/blog-img-3.png"
import { ArrowRight } from 'react-bootstrap-icons'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Featured = () => {

      const handleAnchorClick= (event )=>{
            
      }

      const Section= {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: ".8rem",
            backgroundColor : "rgb(30,39,56)",
            marginTop: "3rem"
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
            height: "11rem",
            width: "16rem",
            backgroundColor: "rgb(30,39,56)",
            borderRadius:".8rem"
      }
      const h6 ={
            backgroundColor : "rgb(30,39,56)",
            color: "#a5b3ce",
      }
      const blogDiv ={
            backgroundColor : "rgb(30,39,56)",
            display:"flex",
            flexDirection:"column",
            alignItems:"start",
            gap:"1.3rem"
      }
      const a = {
            backgroundColor : "rgb(30,39,56)",
            marginTop: "-1rem",
            textDecoration:"none"
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
      const CaptionStyle = {
            backgroundColor: "transparent",
            margin:"0",
            textDecoration: "none",
            color: "black",
      }
      const LinkStyle= {
            backgroundColor: "transparent",
            textDecoration: "none",
            color:"white"
      }
      
  return (
    <section style={Section} className='col-md-6'>
            <h4 style={background} className='pt-5'>Featured Blogs</h4>
            <p className='w-75 text-center pt-3' style={p}>Explore thought-provoking articles that showcase my passion for continuous learning and professional growth.</p>
            <div className='d-flex flex-row justify-content-around mt-5 mb-4 w-75'>
                  <Carousel style={CaptionStyle}>
                        <Carousel.Item style={CaptionStyle}>
                              <img
                                    className="d-block w-100"
                                    src={blogImage1}
                                    alt="First slide"
                              />
                              <Carousel.Caption style={CaptionStyle}>
                                    <a
                                          onClick={handleAnchorClick}
                                          href="https://bobbyhadz.com"
                                          target="_blank"
                                          rel="noreferrer"
                                          style={CaptionStyle}
                                    >
                                          Click Here
                                    </a>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={blogImage2}
                                    alt="First slide"
                              />
                              <Carousel.Caption style={CaptionStyle}>
                                    <a
                                          onClick={handleAnchorClick}
                                          href="https://bobbyhadz.com"
                                          target="_blank"
                                          rel="noreferrer"
                                          style={CaptionStyle}
                                    >
                                          Click Here
                                    </a>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item 
                              
                        >
                              <img
                                    className="d-block w-100"
                                    src={blogImage3}
                                    alt="First slide"
                                    onClick={handleAnchorClick}
                                    href="https://bobbyhadz.com"
                                    target="_blank"
                              />
                              <Carousel.Caption style={CaptionStyle} >
                                    <a
                                          onClick={handleAnchorClick}
                                          href="https://bobbyhadz.com"
                                          target="_blank"
                                          rel="noreferrer"
                                          style={CaptionStyle}
                                    >
                                          Click Here
                                    </a>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>  
                  {/* <div style={blogDiv}>
                        <img style={Image} src={blogImage1} alt="blogImage" />
                        <p style={h6} className='w-75'>Top 11+ Matlab Projects for Engineering Students In 2023</p>
                        <a style={a} href="#">View More <ArrowRight style={background}/></a>
                  </div>         
                  <div style={blogDiv}>
                        <img style={Image} src={blogImage3} alt="blogImage" />
                        <p style={h6} className='w-75'>Business Essay Introduction – Everything You Need To Know</p>
                        <a style={a} href="#">View More <ArrowRight style={background}/></a>
                  </div>          */}
            </div>
            <button style={button}>
                  <Link to="/blogs" style={LinkStyle}>
                        More Blogs <ArrowRight style={Arrow} size={25}/>
                  </Link>
            </button>
    </section>
  )
}

export default Featured