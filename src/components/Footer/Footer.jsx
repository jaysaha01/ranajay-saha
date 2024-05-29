import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer/Footer.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Footer = () => {
    return (
        <div className='footerbx'>
            <Container>
                <Row>
                    <Col md={12}>

                        <div className="footertxt" id='contact'>
                            <h6>Have a project in<br /> mind? Let's get to<br /> work. 👋 📪</h6>

                            <div className="buttonsflx">
                                <a href="https://wa.me/+919804771533"><button className='pbtn'>Say Hellow <FaArrowRight /></button></a>
                                <button className='pbtn'><AnchorLink href='#work'>My Portfolio</AnchorLink></button>


                    
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="footerbutm">
                        <div className="footrebutmone">
                            <a href="https://github.com/jaysaha01" target='_blank'><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/ranajay-saha/" target='_blank'><RiLinkedinFill /></a>
                            <a href=""><FaFacebook /></a>
                            <a href=""><FaDribbble /></a>
                            <a href=""><FaBehance /></a>

                        </div>
                        <div className="footrebutmtwo">
                            {/* <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Works</a>
                            <a href="">Services</a>
                            <a href="">Contact</a> */}



                            <AnchorLink href='#banner'>Home</AnchorLink>
                            <AnchorLink href='#about'>About</AnchorLink>
                            <AnchorLink href='#skill'>Skill</AnchorLink>
                            <AnchorLink href='#work'>Works</AnchorLink>
                            <AnchorLink href='#contact'>Contact</AnchorLink>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
