import React from 'react'
import Header from '../components/Header'
import { Book, Envelope, Github, Linkedin, PcDisplayHorizontal, Person, PersonCheck, Telephone, Tools, } from 'react-bootstrap-icons'
import "../App.css"

const Resume = () => {

      const skills = ["Onpage", "Offpage", "Keyword Research", "Link Building", "Wordpress"];
      const tools = ["Google Console", "Google Analytics", "Frase.io", "Ahref's", "SEMrush","UberSuggest", "Canva", "ChatGPT" ];
      const Section= {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: ".8rem",
            backgroundColor: "rgb(30,39,56)",
            marginTop: "3rem"
      }

      const DefaultColor = {
            backgroundColor: "rgb(30,39,56)"
      }
      const ProfilePara ={
            color: "#a5b3ce",
            lineHeight: "1.6rem"
      }
      const p ={
            color: "#a5b3ce",
            backgroundColor : "rgb(30,39,56)",
            // lineHeight: "1rem"
      }
      const Btn = {
            backgroundColor: "#fe655c",
            color: "white",
            fontWeight: "600",
      }
      const contact = {
            backgroundColor: "transparent",
            color: "white",
            fontWeight: "600",
            textDecoration: "none"
      }

      
  return (<>
      <Header/>
      <section style={Section} className='col-12 col-md-10 col-lg-8 col-xxl-6 d-flex flex-column rounded-3 ps-4 pt-4 mb-5 rounded-3'> 
            <div style={DefaultColor} className='d-flex justify-content-between w-100 mt-3'>
                  <div style={DefaultColor} className='w-50 text-dark d-flex flex-row ps-0 ps-md-4 '>
                       <div className='d-flex flex-column ps-2 ps-md-4 rounded-3'>
                              <div className='d-flex gap-2 gap-md-4 pt-2 pe-2 rounded-3'>
                                    <Github className='icons'/>
                                    <p style={ProfilePara} className='responsiveFontSize'>rajat62</p>
                              </div>
                              <div className='d-flex gap-2 gap-md-4 pt-2 pe-3'>
                                    <Envelope className='icons'/>
                                    <p style={ProfilePara} className=' responsiveFontSize'>rajatchoudharyjmit@gmail.com</p>
                              </div>
                              <div className='d-flex gap-2 gap-md-4 pt-2 pe-2'>
                                    <Linkedin className='icons' />
                                    <p className='responsiveFontSize' style={ProfilePara}>Rajat Choudhary</p>
                              </div>
                              <div className='d-flex ga-2 gap-md-4 pt-2 pe-2 rounded-3'>
                                    <Telephone className='icons'/>
                                    <p className='responsiveFontSize' style={ProfilePara}>72096390766</p>
                              </div>
                       </div>
                  </div>
                  <div className='w-50 text-dark d-flex flex-column justify-content-center gap-3 ps-4 p-md-2 ps-lg-0' style={DefaultColor}>
                        <h4 style={DefaultColor} className='fs-1'>Rupam Choudhary</h4>
                        <p style={p} className='fs-4'>SEO Executive</p>
                  </div>
            </div>
            <div className='d-flex justify-content-between w-100 mt-5' style={DefaultColor}>
                  <div style={DefaultColor} className='w-50 text-dark d-flex flex-column ps-0 ps-md-5 gap-2'>
                       <div style={DefaultColor} className='d-flex gap-3 gap-lg-5 mb-4'>
                              <Book size={25}/>
                              <h5 style={DefaultColor} className='fs-4'>Education</h5>
                       </div>
                      
                        <h6 style={DefaultColor}>12th</h6>
                        <p style={p} className='responsiveFontSize w-75 w-md-100' >Air Force Scool, Ambala Cantt (2012)</p>
                        <h6 style={DefaultColor}>B.Tech ECE</h6>
                        <p style={p} className='responsiveFontSize'>JMIETI, Radaur (2016)</p>
                       
                  </div>
                  <div className='w-50 text-dark d-flex flex-column  gap-2 ps-4 ps-md-0' style={DefaultColor}>
                        <div style={DefaultColor} className='d-flex gap-3 gap-lg-5 mb-2'>
                              <Person size={25}/>
                              <h5 style={DefaultColor} className='fs-4'>About</h5>
                       </div>
                       <p className='pe-4 responsiveFontSize'  style={p}>Result-driven Sr. SEO executive with 3+ years of experience in SEO. Improve organic search ranking to top 5 ranking for 10+ high-competition keywords for different educational websites and improve their organic traffic by 21%. Seeking good opportunities to polish up my skills by learning with the experts. Eager to fulfil a content writer role to positively contribute to the company team.</p>
                  </div>
            </div>
            <div className='d-flex justify-content-between w-100 mt-5' style={DefaultColor}>
                  <div style={DefaultColor} className='w-50 text-dark d-flex flex-column ps-0 ps-md-5 gap-2'>
                       <div style={DefaultColor} className='d-flex gap-3 gap-lg-5 mb-3'>
                              <PersonCheck size={25}/>
                              <h5 style={DefaultColor} className='fs-4'>Skills</h5>
                       </div>
                       {skills.map((skill)=>{
                             return <li style={p} className='responsiveFontSize' >{skill}</li>
                       })}
                  </div>
                  <div className='w-50 text-dark d-flex flex-column justify-content-center gap-3 pe-2 p-lg-0' style={DefaultColor}>
                        <div style={DefaultColor} className='d-flex gap-3 gap-lg-5 mb-2'>
                              <PcDisplayHorizontal size={25}/>
                              <h5 style={DefaultColor} className='fs-4'>Experience</h5>
                       </div>
                       <h6 style={DefaultColor}>Sr. SEO Executive</h6>
                        <p style={p} className='responsiveFontSize'>CAL Info, Kurukshetra (June 2022-Till Date)</p>
                        <h6 style={DefaultColor}>Content Writer</h6>
                        <p style={p} className='responsiveFontSize'>CAL Info, Kurukshetra (December 2019-June 2022)</p>
                  </div>
            </div>
            <div className='d-flex justify-content-between w-100 mt-5 mb-5' style={DefaultColor}>
                  <div style={DefaultColor} className='w-50 text-dark d-flex flex-column ps-0 ps-md-5 gap-2'>
                       <div style={DefaultColor} className='d-flex gap-3 gap-lg-5 mb-3'>
                              <Tools size={25}/>
                              <h5 style={DefaultColor} className='fs-4'>Tools</h5>
                       </div>
                       {tools.map((tool)=>{
                             return <li style={p} className='responsiveFontSize'>{tool}</li>
                       })}
                  </div>
                  <div className='w-50 text-dark d-flex flex-column justify-content-center gap-3' style={DefaultColor}>
                       
                  </div>
            </div>
      </section>
            <div className='pe-3 pb-5'>
                  <button style={Btn} className="btn rounded-5 ps-3 pe-3"><a style={contact} href='https://drive.google.com/file/d/1_zzQn2QWZ6SoTTrMtTeIZJN6oZdQnFsa/view?usp=share_link' target='_blank'>Download</a></button>
            </div>
  </>
  )
}

export default Resume