import React from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const HomeFooter = () => {
  return (
    <footer>
  <div className="container">
    <div className="row" id={styles["mainFooter"]}>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <p className="h5">Contact Info</p>
        <div className={styles.content} id={styles["contact-info"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe ea eveniet ullam, voluptate unde vero, accusantium consequatur suscipit.
          </p>
          <div className={styles.cont}>
            <i className="fas fa-home"></i>
            <p>Suite 02 New Elephant Road usa</p>
          </div>
          <div className={styles.cont}>
            <i className="fas fa-phone"></i>
            <p>+880 142 258 123, 02-96936</p>
          </div>
          <div className={styles.cont}>
            <i className="fas fa-envelope"></i>
            <p>
              <a href="mailto:info@mukti.com">info@mukti.com</a>
            </p>
          </div>
          <div className={styles.cont}>
            <i className="fas fa-globe"></i>
            <p>
              <a href="mailto:info@mukti.com">info@mukti.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <p className="h5">Our Doctors</p>
        <div className={styles.content} id={styles["ourDoctors"]}>
          <div className={styles.doct}>
            <i className="fas fa-angle-double-right"></i>
            <span>Dr. Nick Sims</span>
          </div>
          <div className={styles.doct}>
            <i className="fas fa-angle-double-right"></i>
            <span>Dr. Michael Linden</span>
          </div>
          <div className={styles.doct}>
            <i className="fas fa-angle-double-right"></i>
            <span>Dr. Max Turner</span>
          </div>
          <div className={styles.doct}>
            <i className="fas fa-angle-double-right"></i>
            <span>Dr. Amy Adams</span>
          </div>
          <div className={styles.doct}>
            <i className="fas fa-angle-double-right"></i>
            <span>Dr. Julia Jameson</span>
          </div>
          <div className={styles.doct}>
            <i className="fas fa-angle-double-right"></i>
            <span>Dr. Daniel Sameh</span>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <p className="h5">Our Services</p>
        <div className={styles.content} id={styles["ourServices"]}>
          <div className={styles.service}>
            <i className="fas fa-angle-double-right"></i>
            <span>Outpatient Surgery</span>
          </div>
          <div className={styles.service}>
            <i className="fas fa-angle-double-right"></i>
            <span>Cardiac Clinic</span>
          </div>
          <div className={styles.service}>
            <i className="fas fa-angle-double-right"></i>
            <span>Ophthalmology Clinic</span>
          </div>
          <div className={styles.service}>
            <i className="fas fa-angle-double-right"></i>
            <span>Gynecological Clinic</span>
          </div>
          <div className={styles.service}>
            <i className="fas fa-angle-double-right"></i>
            <span>Outpatient Rehabilitation</span>
          </div>
          <div className={styles.service}>
            <i className="fas fa-angle-double-right"></i>
            <span>Ophthalmology Clinic</span>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <p className="h5">Opening Hours</p>
        <div className={styles.content} id={styles["openingHours"]}>
          <div className={styles.hours}>
            <p>Saturday</p>
            <p>8:00 am-10:00 pm</p>
          </div>
          <div className={styles.hours}>
            <p>Sunday</p>
            <p>6:00 am-8:00 pm</p>
          </div>
          <div className={styles.hours}>
            <p>Monday</p>
            <p>6:00 am-2:00 pm</p>
          </div>
          <div className={styles.hours}>
            <p>Tuesday</p>
            <p>7:00 am-9:00 pm</p>
          </div>
          <div className={styles.hours}>
            <p>Wednesday</p>
            <p>10:00 am-12:00 pm</p>
          </div>
          <div className={styles.hours}>
            <p>Thursday</p>
            <p>2:00 am-6:00 pm</p>
          </div>
        </div>
      </div>
    </div>

    <div id={styles.line}></div>

    <div id={styles.foot}>
      <div>
        Copyright &copy; 2024 <span>
          <a href="#">Mukti</a>
        </span>. Designed By <span>LabArtisan</span>
      </div>
    </div>
  </div>
</footer>


  )
}

export default HomeFooter
