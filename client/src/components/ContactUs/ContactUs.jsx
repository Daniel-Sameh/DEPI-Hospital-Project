import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ContactUs.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | MUKTI";
  }, [])
  return (
    <>
      <Header title="Contact Information" page="Home" info="Contact Us" />
      <section id={styles.contactUs}>
        <div className={`container ${styles.container}`}>
          <div className={`${styles.row} row justify-content-center`}>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className={`h3`}>Contact Information</p>
              <div className={`row ${styles.row}`}>
                <div className={`${styles.contactInfo} col-lg-12 col-md-12 col-sm-6 col-xs-12`}>
                  <p className={`h6 ${styles.h6}`}>Office Address:</p>
                  <p>Suite 02, Level 12, Sahera Tropical Center 218</p>
                  <p>New Elephant Road, Dhaka - 1205</p>
                </div>
                <div className={`${styles.contactInfo} col-lg-12 col-md-12 col-sm-6 col-xs-12`}>
                  <p className={`h6 ${styles.h6}`}>Phone Number:</p>
                  <p>+88016678170593, 01919-264687</p>
                  <p>02-9611936</p>
                </div>
                <div className={`${styles.contactInfo} col-lg-12 col-md-12 col-sm-6 col-xs-12`}>
                  <p className={`h6 ${styles.h6}`}>Email Address:</p>
                  <p><a href="mailto:support@LabArtisan">support@LabArtisan</a></p>
                </div>
                <div className={`${styles.contactInfo} col-lg-12 col-md-12 col-sm-6 col-xs-12`}>
                  <p className={`h6 ${styles.h6}`}>Website Address:</p>
                  <p><a href="http://LabArtisan">LabArtisan</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className={`h3`}>We Love To Hear From You</p>
              <div className={`row ${styles.row}`}>
                <div className={`${styles.input} input col-lg-12 col-md-12 col-sm-6 col-xs-6`}>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
                </div>
                <div className={`${styles.input} input col-lg-12 col-md-12 col-sm-6 col-xs-6`}>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className={`${styles.input} input col-lg-12 col-md-12 col-sm-6 col-xs-6`}>
                  <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                </div>
                <div className={`${styles.input} input col-lg-12 col-md-12 col-sm-6 col-xs-6`}>
                  <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Write a message...."></textarea>
                </div>
                <div className={`${styles.input} input col-lg-12 col-md-12 col-sm-6 col-xs-6`}>
                  <button type="submit" className="btn btn-primary">Send Message <FontAwesomeIcon icon={faAngleDoubleRight}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2345254208853!2d90.38540125131114!3d23.739014820790004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c0a73a7bab%3A0xeda5053d48f485ca!2sNew%20Elephant%20Rd%2C%20Dhaka%201205%2C%20Bangladesh!5e0!3m2!1sen!2seg!4v1724853840953!5m2!1sen!2seg" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <Footer/>
    </>
  )
}

export default ContactUs
