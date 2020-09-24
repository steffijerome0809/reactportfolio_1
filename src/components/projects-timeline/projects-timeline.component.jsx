import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';

// projects
import Ispyrefi from '../../assets/img/projects/ispyrefi.png';
import PortsmouthPick from '../../assets/img/projects/portsmouthpickup.png';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './projects-timeline.styles.css';

const TimeLine = () => {
  return (
    <div id='projects'>
      <h1 className='pt-3 text-center font-details-b pb-3'>PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: I-SPY-REFI */}
          <ImageEvent
            date='Sept 2020'
            className='text-center'
            text='I-SPY-REFI'
            src={Ispyrefi}
            alt='I-SPY-REFI'
          >
            <div className='d-flex justify-content-between flex-column mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      className='p-2 text-center accordian-main'
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong>A personal Home assessment
                        app that allows you to fill out a quick form of your
                        address and any home improvements made to your home.
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>
                            Search your home worth using the comparables homes
                            in that location
                          </li>
                          <li>Real-time API calls</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>Html-5</li>
                          <li>CSS</li>
                          <li>SASS</li>
                          <li>Firebase</li>
                          <li>ReactJS</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton
                  href='https://github.com/steffijerome0809/i-spy-refi-1'
                  target='_blank'
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href='https://github.com/steffijerome0809/i-spy-refi-1'
                  target='_blank'
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portsmouth Pickup */}
          <ImageEvent
            date='June 2020'
            className='text-center'
            text='Portsmouth PickUp'
            src={PortsmouthPick}
            alt='Portsmouth Pickup'
          >
            <div className='d-flex justify-content-between flex-column mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      className='p-2 text-center accordian-main'
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong>A fun way to have pickup
                        games in Portsmouth NH
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>Keep tracks of entries for each user</li>
                          <li>
                            Allows users to schedule game events ,Cancel Event
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>Html-5</li>
                          <li>CSS</li>
                          <li>Material-UI</li>
                          <li>Node JS</li>
                          <li>Express JS</li>
                          <li>Sequelize</li>
                        </ul>
                        <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or{' '}
                          <strong>log in</strong> using the demo account below.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton
                  href='https://thawing-dusk-46621.herokuapp.com/'
                  target='_blank'
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href='https://github.com/steffijerome0809/PortsmouthNH-Pickup'
                  target='_blank'
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
