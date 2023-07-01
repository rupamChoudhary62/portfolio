import React from 'react';
import Header from "../components/Header";
import FooterDiv from "../components/FooterDiv"
import { ArrowRight } from 'react-bootstrap-icons';

const Blogs = () => {

      const data  = [
            {
                  title: "Easiest Methods of How to Solve X Like A Professional",
                  summary:"How to solve x: I was one of those students who could never understand algebra. Starting to solve such an equation was like getting into cold water in winters. I always ended up not knowing how to solve for X.",
                  link: "https://statanalytica.com/blog/how-to-solve-x/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2020/08/how-to-solve-x-1024x576.png"
            },
            {
                  title: "Top 7 Types of Statistics Graphs for Data Representation",
                  summary:"Statistics graphs are one of the most crucial parts of our life. Without statistics graphs, data can’t be understood by anyone. We can’t utilize different data without the use of statistics",
                  link: "https://statanalytica.com/blog/statistics-graphs/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2020/05/Statistics-Graphs-1.webp"
            },
            {
                  title: "75+ Realistic Statistics Project Ideas For Students To Score A+",
                  summary:"Statistics is one of the major subjects for every student, even in high school or college. These days almost every student is searching for the best, and more practical statistics project ideas.",
                  link: "https://statanalytica.com/blog/statistics-project-ideas/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2021/12/Statistics-Project-Ideas.jpg.webp"
            },
            {
                  title: "Top 99+ Trending Statistics Research Topics for Students",
                  summary:"Being a statistics student, finding the best statistics research topics is quite challenging. But not anymore; find the best statistics research topics now!!!",
                  link: "https://statanalytica.com/blog/statistics-research-topics/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2021/12/statistics-research-topics.jpg.webp"
            },
            {
                  title: "Want To Know The Difference Between Arithmetic  Vs Geometric In 2023",
                  summary:"For students, mathematics is a very challenging subject, and these concepts “arithmetic vs geometric” also have to deal with infinite numbers.",
                  link: "https://statanalytica.com/blog/arithmetic-vs-geometric/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2021/12/Arithmetic-VS-Geometric.png.webp"
            },
            {
                  title: "Top 15 Importance of Mathematics in Everyday Life",
                  summary:"Why math is important, or what is the importance of mathematics? These are some kinds of questions that the students search for. ",
                  link: "https://statanalytica.com/blog/importance-of-mathematics/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2022/09/Importance-of-Mathematics.webp"
            },
            {
                  title: "Top 26 Uses Of Statistics In Our Day to Day Life",
                  summary:"The majority of students think that why they are studying statistics and what are the uses of statistics in our daily life. They also want to know the importance of statistics in our daily life.",
                  link: "https://statanalytica.com/blog/uses-of-statistics/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2019/06/uses-of-statistics-1024x576.jpg"
            },
            {
                  title: "Step by Step Tutorial on How to Solve Fractions with Examples",
                  summary:"Are you looking for the best method to lose weight? If yes!! Let’s know how to solve fractions. Sounds weird? Yes, you read it right! You need to know Body Mass Index (BMI) using fractions to lose weight effectively. ",
                  link: "https://statanalytica.com/blog/how-to-solve-fractions/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2020/08/how-to-solve-fractions-1024x576.png"
            },
            {
                  title: "70+ Aerospace Engineering Projects To Try Now",
                  summary:"Aerospace engineering is not as easy a subject as it seems to be. There is a need for in-hand skills. So, how can one practice developing the required skills in this field? ",
                  link: "https://statanalytica.com/blog/aerospace-engineering-projects/",
                  imageLink: "https://statanalytica.com/blog/wp-content/uploads/2022/11/aerospace-engineering-projects.png.webp"
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
            borderBottom: "1px solid grey",
            
            paddingBottom: "2rem",
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

      <section style={Section} className='col-12 col-md-10 col-lg-8 col-xxl-6 '>
            {
                  data.map((blogData)=>{
                        return <div style={innerDiv} className='d-flex flex-column flex-lg-row align-items-center '>
                              <div>
                                    <img style={imageStyle} src={blogData.imageLink}/>
                              </div>
                              <div style={dataStyle}>
                                    <h6 style={background} className='fs-5 text-center text-lg-start'>{blogData.title}</h6>
                                    <p style={p} className='text-center pt-2 text-lg-start'>{blogData.summary}</p>
                                    <a style={anchor} className='text-center text-lg-start' target="_blank" href={blogData.link}>Continue Reading</a>
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