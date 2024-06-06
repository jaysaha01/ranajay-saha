import React from 'react'
import './banner.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import bannerImage from '../../assets/Banner-image.png'
import  packman  from "../../assets/pacman-png.png";
import { FaArrowRight } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Banner = () => {
    return (
        <div>
            <div className="bannercover" id='banner'>

                <Container>
                    <Row className='align-items-center'>
                        <Col md={6}><div className="bannerleft">

                            <div className="socilamedia" data-aos="fade-up" data-aos-duration="2000">
                                <FaGithub />
                                <FaLinkedinIn />
                                <FaFacebook />
                            </div>

                            <div className="headingline" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                                <h1>
                                👋Hey there,<br />
                                It's Ranajay Saha.
                                </h1>
                                
                            </div>
                            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000">A passionate UI and Front-End Developer based In Kolkata, India</p>
                            <div className="buttonsflx">
                                
                            <a href="https://wa.me/+919804771533"><button className='pbtn'>Say Hellow <FaArrowRight /></button></a>
                            <button className='pbtn'><AnchorLink href='#work'>My Portfolio</AnchorLink></button>

                            </div>


                        </div></Col>

                        <Col md={6}><div className="bannerright" data-aos="fade-right" data-aos-duration="2000">    

                            <img src={packman}  className="packman" alt="" />
                           

                            <img src={bannerImage} alt=""/>

                        </div></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner
