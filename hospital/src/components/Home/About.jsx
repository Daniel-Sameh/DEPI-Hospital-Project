import React from 'react';
import styles from '../Home/About.module.css';
import image1 from '../../assets/images/08.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <p className={`h3 ${styles.title}`}>We Offer Specialized</p>
      <p className={`h2 ${styles.title}`}>Orthopedics To Meet Your Needs</p>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles.about}`}>
            <img src={image1} alt="" />
            <Fade cascade triggerOnce damping={0.3}>
              <p className={`h6 ${styles.h6}`}>Medical Treatment</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae corporis, sapiente
              </p>
              <a href="#">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
            </Fade>
          </div>

          <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles.about}`}>
            <img src={image1} alt="" />
            <Fade cascade triggerOnce damping={0.3}>
              <p className={`h6 ${styles.h6}`}>Emergency Help</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae corporis, sapiente
              </p>
              <a href="#">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
            </Fade>
          </div>

          <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles.about}`}>
            <img src={image1} alt="" />
            <Fade cascade triggerOnce damping={0.3}>
              <p className={`h6 ${styles.h6}`}>Medical Professionals</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae corporis, sapiente
              </p>
              <a href="#">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
            </Fade>
          </div>

          <div className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles.about}`}>
            <img src={image1} alt="" />
            <Fade cascade triggerOnce damping={0.3}>
              <p className={`h6 ${styles.h6}`}>Qualified Doctors</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae corporis, sapiente
              </p>
              <a href="#">Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></a>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
