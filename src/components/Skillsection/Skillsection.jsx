import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import html from '../../assets/html.png'
import skill from "../../utils/mockData";
import './SkillSection.css'


const Skillsection = () => {

    return (
        <div className='skill' id='skill'>
            <Container>
                <Row>
                    <div className='heading'>Skills I May offer you</div>

                </Row>
                <Row data-aos="fade-up" data-aos-duration="2000">

                    {
                        skill.map((skillss) => (

                            <Col md={4} className='mb-4' key={skillss.id}>
                                <div className='titleCard'>
                                    <img src={skillss.icon} alt="" />
                                    <h2>{skillss.skill}</h2>
                                    <p>{skillss.description}</p>
                                </div>
                            </Col>

                        ))
                    }

                </Row>
            </Container>
        </div >
    )
}

export default Skillsection
