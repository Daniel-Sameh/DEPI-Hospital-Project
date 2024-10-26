import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faHome, faPhone, faEnvelope, faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styles from '../Nav/Nav.module.css'
import logo from "../../assets/images/logo (1).png"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row" id={styles.mainFooter}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <p className={`h5 ${styles.h5}`}>Contact Info</p>
            <div className={styles.content} id={styles["contact-info"]}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe ea eveniet ullam, voluptate unde vero, accusantium consequatur suscipit.</p>
              <div className={styles["cont"]}>
                <FontAwesomeIcon icon={faHome} />
                <p>Suite 02 New Elephant Road usa</p>
              </div>
              <div className={styles["cont"]}>
                <FontAwesomeIcon icon={faPhone} />
                <p>+880 142 258 123, 02-96936</p>
              </div>
              <div className={styles["cont"]}>
                <FontAwesomeIcon icon={faEnvelope} />
                <p><a href="mailto:info@mukti.com">info@mukti.com</a></p>
              </div>
              <div className={styles["cont"]}>
                <FontAwesomeIcon icon={faGlobe} />
                <p><a href="mailto:info@mukti.com">info@mukti.com</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " id={styles["newsletter"]}>
            <a href="/"><img src={logo} alt="MUKTI" /></a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam, adipisci obcaecati beatae eos sunt ipsa officiis? A, assumenda officiis, cum nisi nobis magnam magni deserunt delectus est sed iste.</p>
            <p className={`h3 ${styles.h3}`}>Subscribe To Our Newsletter</p>
            <div className="row align-items-center justify-content-center" style={{marginBottom:"20px"}} > {/* !!!!SOLVE THIS!!!! */}
              <div className="col-lg-9 col-md-10 col-sm-8" style={{margin:"0px"}}>
                <div className={`email-subscription ${styles["email-subscription"]}`}>
                  <div className={`form-floating ${styles["form-floating"]}`}>
                    <input type="email" className={`form-control  ${styles["email-input"]} rounded-0`} id={styles["floatingInput"]} placeholder="name@example.com" />
                    <label htmlFor="floatingInput"><FontAwesomeIcon icon={faPaperPlane} /> Email address</label>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-4" style={{margin:"0px", padding:"0px"}}>
                <button className={styles["subscribe-btn"]} style={{transform: "translateX(-19px)", height:"3.5rem", borderRadius:"5px"}}>Subscribe Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <p className={`h5 ${styles.h5}`}>Opening Hours</p>
            <div className={styles.content} id={styles["openingHours"]}>
              <div className={styles["hours"]}>
                <p>Saturday</p>
                <p>8:00 am-10:00 pm</p>
              </div>
              <div className={styles["hours"]}>
                <p>Sunday</p>
                <p>6:00 am-8:00 pm</p>
              </div>
              <div className={styles["hours"]}>
                <p>Monday</p>
                <p>6:00 am-2:00 pm</p>
              </div>
              <div className={styles["hours"]}>
                <p>Tuesday</p>
                <p>7:00 am-9:00 pm</p>
              </div>
              <div className={styles["hours"]}>
                <p>Wednesday</p>
                <p>10:00 am-12:00 pm</p>
              </div>
              <div className={styles["hours"]}>
                <p>Thursday</p>
                <p>2:00 am-6:00 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div id={styles["line"]}></div>
        <div id={styles["foot"]}>
          <div>
            Copyright @ 2024 <span><a href="/">Mukti</a></span>. Designed By <span>LabArtisan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
