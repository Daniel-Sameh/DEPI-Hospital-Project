import React from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const NewsLetter = () => {
  return (
    <section id={styles["news-letter"]}>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-6 col-md-6-col-sm-12 col-xs-12">
            <p class={"h2"+ ` ${styles.h2}`}>Join Our NewsLetter</p>
          </div>
          <div class="col-lg-6 col-md-6-col-sm-12 col-xs-12">
            <div class={styles["email-subscription"]}>
              <div class={"form-floating "+styles["form-floating"]}>
                <input type="email" class={`form-control ${styles["email-input"]} rounded-0`} id="floatingInput"
                  placeholder="name@example.com"/>
                  <label for="floatingInput"><FontAwesomeIcon icon={faPaperPlane}/> Email address</label>
              </div>
              <button class={styles["subscribe-btn"]}>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
