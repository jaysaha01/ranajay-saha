import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projectsection.css'
import projectData from '../../utils/projectData';
import Projectcard from '../Projectcard/Projectcard.jsx';

const Projectsection = () => {
    return (
        <div className='projectsec' id='work'>

            <Container data-aos="fade-up">
                <Row>
                    <div className='heading'>Latest Projects</div>
                </Row>
                <Row>

                    {
                        projectData.map((project,i) => (
                            <Col md={6} className='mb-4' key={i}>
                                <Projectcard resData={project}/>
                            </Col>
                        ))
                    }

                </Row>
            </Container>



        </div>
    )
}

export default Projectsection
