import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import Aboutimg from '../../assets/aboutimg.jpg'
import { FaArrowRight } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const About = () => {
    return (
        <div id='about'>
            <Container className='aboutsec'>
                <Row>
                    <Col lg={6} data-aos="fade-right" data-aos-duration="2000"><div className="abotimg"><img src={Aboutimg} alt="" /></div></Col>
                    <Col lg={6} data-aos="fade-left" data-aos-duration="3000"><div className="aboutdtls">

                        <h2>About Me</h2>

                        <p className='pt-3'>


                            Hi! I am Ranajay Saha, a UI Developer. I have 1 Year of Experience in this field. Since I have been passionate about design and art. I grew up with the Internet and naturally took a path according to this passion. Web Development is a way for me to keep track of all my passions. I've completed my Graphic Designing and Web Development from Central Institute Of Technology (CIT) - Dumdum. I've complete knowledge of Web Development and looking for a job in the same role

                        </p>

                        {/* <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nulla, corrupti ipsam facilis quasi nobis rerum saepe sequi fuga labore!.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nulla, corrupti ipsam facilis quasi nobis rerum saepe sequi fuga labore!
                        </p> */}

                        <div className="buttonsflx">

                        <a href="https://wa.me/+919804771533"><button className='pbtn'>Say Hellow <FaArrowRight /></button></a>
                        <button className='pbtn'><AnchorLink href='#work'>My Portfolio</AnchorLink></button>

                        </div>

                    </div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
