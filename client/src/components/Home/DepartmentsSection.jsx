import React from 'react';
import styles from '../Home/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/images/01.png';
import img6 from '../../assets/images/06.png';
import img7 from '../../assets/images/07.png';
import img5 from '../../assets/images/05.png';
import img9 from '../../assets/images/09.png';
import img3 from '../../assets/images/03.png';
import img8 from '../../assets/images/08.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheck, faUserInjured, faUserMd, faFirstAid, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { Fade, Zoom, Slide, Bounce } from 'react-awesome-reveal';

const DepartmentsSection = ({ handleClick }) => {
  return (
    <section id={styles.departments}>
      <div className="container">
        <Fade triggerOnce>
          <div className="row">
            <div className="col">
              <p className={`h3 ${styles.title} ${styles.h3}`}>We Are The</p>
              <p className={`h2 ${styles.title} ${styles.h2}`}>Best Of Our Department Center</p>
            </div>
          </div>
        </Fade>

        <Fade cascade damping={0.3} triggerOnce>
          <div className="row justify-content-center" id={styles.departmentsLogos}>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img1} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img6} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img7} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img5} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img9} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img3} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img1} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img7} alt="" />
            </div>
            <div className={`col-lg-1 col-md-1 col-sm-3 col-xs-3 ${styles.deptLogo}`}>
              <img src={img8} alt="" />
            </div>
          </div>
        </Fade>

        <Slide direction="left" >
          <div className="row justify-content-center" id={styles.specialty}>
            <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${styles.specialtyDetails}`}>
              <p className="h5">Specialty Rhinology 1</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem itaque placeat quas quisquam repellendus, facilis nostrum rerum. Atque illo culpa eius doloremque nostrum vero a dignissimos repellat, deleniti inventore porro?</p>
              <div className="row">
                <div className={`col-lg-6 col-md-12 col-sm-6 col-xs-6 ${styles.departmentFeatures}`}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Qualified Doctors</span>
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-6 col-xs-6 ${styles.departmentFeatures}`}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Feel like Home Services</span>
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-6 col-xs-6 ${styles.departmentFeatures}`}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>24x7 Emergency Services</span>
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-6 col-xs-6 ${styles.departmentFeatures}`}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Outdoor Checkup</span>
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-6 col-xs-6 ${styles.departmentFeatures}`}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>General Medical</span>
                </div>
                <div className={`col-lg-6 col-md-12 col-sm-6 col-xs-6 ${styles.departmentFeatures}`}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Easy and Affordable Billing</span>
                </div>
              </div>
              <a href="#book-appointment" onClick={handleClick}>
                Appointment Now <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${styles.specialtyDiv}`}>
              {/* Image placeholder */}
            </div>
          </div>
        </Slide>
      </div>

      <div className="container-fluid" id={styles.statistics}>
        <Bounce cascade triggerOnce>
          <div className="row justify-content-center my-5">
            <div className={`col-lg-3 col-md-3 col-sm-4 col-xs-6 ${styles.stat}`}>
              <div className={styles.cont}>
                <FontAwesomeIcon icon={faUserInjured} />
                <div className={styles.details}>
                  <p>152+</p>
                  <p>Patients Every Day</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-3 col-sm-4 col-xs-6 ${styles.stat}`}>
              <div className={styles.cont}>
                <FontAwesomeIcon icon={faUserMd} />
                <div className={styles.details}>
                  <p>122+</p>
                  <p>Qualified Doctors</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-3 col-sm-4 col-xs-6 ${styles.stat}`}>
              <div className={styles.cont}>
                <FontAwesomeIcon icon={faFirstAid} />
                <div className={styles.details}>
                  <p>3+</p>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-3 col-sm-4 col-xs-6 ${styles.stat}`}>
              <div className={styles.cont}>
                <FontAwesomeIcon icon={faStethoscope} />
                <div className={styles.details}>
                  <p>105+</p>
                  <p>Diagnosis Verity</p>
                </div>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </section>
  );
};

export default DepartmentsSection;
