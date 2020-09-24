import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Profile from '../../assets/img/profile/Profile.webp';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div id='about'>
      <div className='about'>
        <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
        <Container>
          <Row className='pt-3 pb-5 align-items-center'>
            <Col xs={12} md={6}>
              <Row className='justify-content-center mb-2 mr-2 '>
                <Image
                  className='profile justify-content-end'
                  alt='profile'
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=' align-items-start p-2 my-details rounded'>
                Hi I am <strong>&nbsp;Steffi Jerome</strong>
                <br />A full stack engineer with hands on experience in MERN
                (Mongo/Express/React/Nodejs). Attended an aggressive 24 weeks
                boot camp session, conducted by University of New Hampshire and
                completed the course with an outstanding grades.
                <br />
                Now, I can build web applications using latest tech stacks
                including HTML, CSS, Bootstrap, React js , Node js, Express js,
                MySQL and Mongo databases. Additionally I have experience in
                writing functional test cases, creating a traceability matrix
                and executing the same for testing web applications.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <Col className='d-flex justify-content-center flex-wrap'>
                  <div>
                    <a href='#contact'>
                      <Button className='m-2' variant='outline-primary'>
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://docs.google.com/document/d/1yT0bU4R1JOpzsR54Mwqp5Or4wgkJOLWt/edit'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-success'>
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://github.com/steffijerome0809'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-dark'>
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://www.linkedin.com/in/steffi-jerome-052213188/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-info'>
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
