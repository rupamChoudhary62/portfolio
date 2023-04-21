import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Github, Linkedin, Medium, HouseFill,  } from 'react-bootstrap-icons';
import {Link} from "react-router-dom"

export const Header = () => {

      const ul ={
            listStyle:"none",
            display: "flex",
            gap: "1.1rem"
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
      
  return (
    <nav className='d-flex justify-content-between w-100'>
      <div className='ps-5 pt-4'>
            <Link to="/"> <HouseFill color='white' size={32}/></Link>
      </div>
      <div className='pt-4'>
            <ul style={ul}>
                  <li>
                        <a href='https://github.com/rupamChoudhary62' target="_blank">
                              <Github size={22} color='white'/>
                        </a>
                  </li>
                  <li>
                        <a href='https://www.linkedin.com/in/rupam-choudhary/' target="_blank">
                              <Linkedin size={22} color='white'/>
                        </a>
                  </li>
                  <li>
                        <a href='https://medium.com/@contactrupamchoudhary' target="_blank">
                              <Medium size={22} color='white'/>
                        </a>
                  </li>
            </ul>
      </div>
      <div className='pe-3 pt-3'>
            <button style={Btn} className="btn rounded-5 ps-3 pe-3"><Link style={contact} to="/contact">Hire Me</Link></button>
      </div>
    </nav>
  )
}
export default Header

