import React from 'react'
import Header from "../components/Header";
import Footer from "../components/FooterDiv"
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const Contact = () => {

      const Section= {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: ".8rem",
            backgroundColor : "rgb(30,39,56)",
            marginTop: "7rem"
      }
      const h4Style = {
            backgroundColor : "rgb(30,39,56)",
            color:"white",     
            padding: "2rem 0",
            fontSize: "1.5rem"
      }
      const para = {
            color: "#a5b3ce",
            backgroundColor : "rgb(30,39,56)",
            lineHeight: "1.6rem",    
            textAlign: "center"
      }
      const icon={
            backgroundColor : "rgb(30,39,56)",
      }
      const iconpara={
            color: "#a5b3ce",
            backgroundColor : "rgb(30,39,56)",
            paddingTop: ".8rem"
      }
      const background={
            backgroundColor : "rgb(30,39,56)",
      }
      
  return (
      <>
            <Header/>
            <section style={Section} className='col-md-6 pb-3'>
                  <h6 style={h4Style}>Let's get in touch</h6>
                  <p style={para} className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio natus tenetur aliquam?</p>
                  <div className='d-flex flex-column gap-2' style={background}>
                        <div className='d-flex align-items-center gap-3' style={background}><EnvelopeFill style={icon} size={25}></EnvelopeFill><p style={iconpara}>contactrupamchoudhary@gmail.com</p></div>
                        {/* <div className='d-flex align-items-center gap-3' style={background}><TelephoneFill style={icon} size={25}></TelephoneFill><p style={iconpara}></p></div> */}
                  </div>
            </section>
            <Footer/>
      </>

  )
}

export default Contact