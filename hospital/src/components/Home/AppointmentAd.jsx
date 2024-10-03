import React, { useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Home/Home.module.css'
import { Fade } from "react-awesome-reveal";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const AppointmentAd = ({ handleClick }) => {
  // useEffect(() => {
  //   if (refEl.current) {
  //     handleClick(); // Call handleClick after the element is rendered
  //   }
  // }, [refEl, handleClick]);
  return (
    <section id={styles.appointmentAd}>
      <div className="container-fluid">
        <Row className={`justify-content-start align-items-start`}>
          <Col className={styles.col}>
            <div>
              <Fade cascade triggerOnce damping={0.3}>
                <p className={`h3 ${styles.h3}`}><Fade cascade damping={0.1} style={{margin:'0'}}>Best Medical Clinic</Fade></p>
                <p className={`h1 ${styles.h1}`}>
                  <span>Bringing health</span> to life for the whole family
                </p>
                <a href="#book-appointment" onClick={handleClick}>
                  <span>Get Appointments</span>
                  <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                </a>
              </Fade>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default React.memo(AppointmentAd)
