import React from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const BookAppointment = ({reference}) => {
  return (
    <section id={styles["book-appointment"]} ref={reference}>
      <div className="container-fluid">
        <div className="row">
          {/* Opening Hours */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id={styles.openings}>
            <p className="h2">24 Hours</p>
            <p className="h2">Opening Our Service</p>
            <div className={styles.timing}>
              <div className={styles.day}>
                <p>Saturday</p>
                <p>8:00 am-10:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Sunday</p>
                <p>6:00 am-8:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Monday</p>
                <p>6:00 am-2:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Tuesday</p>
                <p>7:00 am-9:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Wednesday</p>
                <p>10:00 am-12:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Thursday</p>
                <p>2:00 am-6:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Friday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Book An Appointment */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id={styles["make-app"]}>
            <p className="h2">Make An</p>
            <p className="h2">Appointment</p>
            <form action="#">
              <input type="text" placeholder="Your Name" required className={styles.in} />
              <select className={`form-select ${styles.in}`} aria-label="Default select example">
                <option selected>Select Departments</option>
                <option value="1">Rhinology</option>
                <option value="2">Plastic Surgery</option>
                <option value="3">Urology</option>
                <option value="4">Gastroenterology</option>
                <option value="5">Eye Care</option>
                <option value="6">Dental Care</option>
                <option value="7">Orthopedics</option>
              </select>
              <input type="number" name="phone" id="phone" placeholder="Phone Number" min="0" className={styles.in} />
              <input type="date" name="date" id="date" className={styles.in} min="" />
              <button>
                Appointment Now <FontAwesomeIcon icon={faAngleDoubleRight}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default BookAppointment
