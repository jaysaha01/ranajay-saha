import React, { useState } from 'react'
import './mynavbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowRight } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Mynavbar = () => {

  const [fix, setFix]=useState(false);

  function setFixed(){
    if(window.scrollY >= 300){
      setFix(true);
    }else{
      setFix(false);
    }
  }

  window.addEventListener('scroll', setFixed )


  return (
    <div>
      <Navbar expand="lg" className={fix ? 'flexed' : ''}>
        <Container>
          <Navbar.Brand href="#">
            <h3 className='logo'>Ranajay <span className='gray'>Saha</span></h3>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto g-5 my-2 my-lg-0"
              navbarScroll
            >
              <AnchorLink href='#banner' className='nav-link'>Home</AnchorLink>
              <AnchorLink href='#about' className='nav-link'>About</AnchorLink>
              <AnchorLink href='#skill' className='nav-link'>Skill</AnchorLink>
              <AnchorLink href='#work' className='nav-link'>Works</AnchorLink>
              <AnchorLink href='#contact' className='nav-link'>Contact</AnchorLink>
            
            </Nav>
          
           <a href="tel:+919804771533"><button className='pbtn online'>Let's Talk<FaArrowRight /> </button></a>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Mynavbar
