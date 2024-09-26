import React from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/01 (1).jpg'
import img1 from '../../assets/images/02 (1).jpg'
import img2 from '../../assets/images/03 (1).jpg'
import img3 from '../../assets/images/04 (1).jpg'
const DoctorsInfo = () => {
  return (
    <section className={styles["doctors-section"]}>
      <p className={`h3 ${styles.h3}`}>Meet Our</p>
      <p className="h2">Mukti Professional Doctors</p>

      <div className={styles["doctors-container"]}>
        <div className={styles["doctor-card"]}>
          <img src={img} alt="Dr. Jason Kovalsky" />
          <div className={styles["doctor-info"]} id={styles["first-doc"]}>
            <h3>Dr. Jason Kovalsky</h3>
            <p>Cardiologist</p>
          </div>
          <div className={styles.contacts}>
            <p>
              <span>Phone:</span> 658 222 127 964
            </p>
            <p>
              <span>Email:</span> admin@gmail.com
            </p>
          </div>
        </div>

        <div className={styles["doctor-card"]}>
          <img src={img1} alt="Patricia Mcneel" />
          <div className={styles["doctor-info"]} id={styles["second-doc"]}>
            <h3>Patricia Mcneel</h3>
            <p>Pediatrist</p>
          </div>
          <div className={styles.contacts}>
            <p>
              <span>Phone:</span> 658 222 127 964
            </p>
            <p>
              <span>Email:</span> admin@gmail.com
            </p>
          </div>
        </div>

        <div className={styles["doctor-card"]}>
          <img src={img2}alt="William Khanna" />
          <div className={styles["doctor-info"]} id={styles["third-doc"]}>
            <h3>William Khanna</h3>
            <p>Throat Specialist</p>
          </div>
          <div className={styles.contacts}>
            <p>
              <span>Phone:</span> 658 222 127 964
            </p>
            <p>
              <span>Email:</span> admin@gmail.com
            </p>
          </div>
        </div>

        <div className={styles["doctor-card"]}>
          <img src={img3} alt="Eric Patterson" />
          <div className={styles["doctor-info"]} id={styles["fourth-doc"]}>
            <h3>Eric Patterson</h3>
            <p>Therapy</p>
          </div>
          <div className={styles.contacts}>
            <p>
              <span>Phone:</span> 658 222 127 964
            </p>
            <p>
              <span>Email:</span> admin@gmail.com
            </p>
          </div>
        </div>
      </div>

      <a href="doctors.html">
        <button className={styles["view-all-btn"]}>View All Doctors »</button>
      </a>
    </section>

  )
}

export default DoctorsInfo
