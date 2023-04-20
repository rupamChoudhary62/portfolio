import React from 'react';
import Header from "../components/Header";
import FooterDiv from "../components/FooterDiv"
import { ArrowRight } from 'react-bootstrap-icons';

const Blogs = () => {

      const data  = [
            {
                  title: "Top 49+ Informative Speech Topics For College Students 2023",
                  summary:"If you are looking for informative speech topics then you are at the right place. Here in this post we will tell you more than 49 informative speech topics that will further help you in your study.",
                  link: "#",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2023/04/Informative-Speech-Topics.webp"
            },
            {
                  title: "43+ Innovative PBL Project Ideas For All Ages In 2023",
                  summary:"Are you looking for PBL project ideas, if so then you are at the right place. Project-Based Learning (PBL) is a student-centered teaching methodology.",
                  link: "#",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2023/04/PBL-Project-Ideas.webp"
            },
            {
                  title: "23+ Sustainability Project Ideas to Help Save the Planet",
                  summary:"Climate change and environmental degradation are two of the biggest challenges the world is facing today. As individuals, we can make a significant impact by adopting sustainable practices.",
                  link: "#",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2023/04/sustainability-project-ideas.webp"
            },
      ]

      const Section= {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            borderRadius: ".8rem",
            backgroundColor : "rgb(30,39,56)",
            marginTop: "7rem",
            gap: "2rem",
            padding: "2rem 2.5rem 2rem 2rem",
            // justifyContent: "space-around"
      }
      const imageStyle= {
            width: "24rem",
            backgroundColor : "rgb(30,39,56)",
            borderRadius: ".8rem"
      }
      const innerDiv= {
            display: "flex",
            gap: "1rem",
            backgroundColor : "rgb(30,39,56)",
      }
      const dataStyle= {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor : "rgb(30,39,56)",
      }
      const background= {
            backgroundColor : "rgb(30,39,56)",
      }
      const p={
            color: "#a5b3ce",
            backgroundColor : "rgb(30,39,56)",
            lineHeight: "1.6rem"
      }
      const anchor={
            color:"#fe655c",
            backgroundColor : "rgb(30,39,56)",
            textDecoration:"none"
      }

  return (
    <>
      <Header/>

      <section style={Section} className='col-md-6'>
            {
                  data.map((blogData)=>{
                        return <div style={innerDiv}>
                              <div>
                                    <img style={imageStyle} src={blogData.imageLink}/>
                              </div>
                              <div style={dataStyle}>
                                    <h6 style={background} className='fs-5'>{blogData.title}</h6>
                                    <p style={p}>{blogData.summary}</p>
                                    <a style={anchor} href={blogData.link}>Continue Reading</a>
                              </div>
                        </div>
                  })
            }
      </section>

      <FooterDiv/>
    </>
  )
}

export default Blogs