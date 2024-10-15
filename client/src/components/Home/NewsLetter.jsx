import React from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const NewsLetter = () => {
  return (
    <section id={styles["news-letter"]}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6-col-sm-12 col-xs-12">
            <p className={"h2"+ ` ${styles.h2}`}>Join Our NewsLetter</p>
          </div>
          <div className="col-lg-6 col-md-6-col-sm-12 col-xs-12">
            <div className={styles["email-subscription"]}>
              <div className={"form-floating "+styles["form-floating"]}>
                <input type="email" className={`form-control ${styles["email-input"]} rounded-0`} id="floatingInput"
                  placeholder="name@example.com"/>
                  <label for="floatingInput"><FontAwesomeIcon icon={faPaperPlane}/> Email address</label>
              </div>
              <button className={styles["subscribe-btn"]}>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
