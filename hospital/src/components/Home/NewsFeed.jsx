import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheck, faUserInjured, faUserMd, faFirstAid, faStethoscope} from '@fortawesome/free-solid-svg-icons';
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/01.jpg'
const NewsFeed = () => {

  return (
    <section id={styles["news-feed"]}>
      <p className={`h3 ${styles.h3}`}>News Feed</p>
      <p className={`h2 ${styles.h2}`}>Be The First To New Stories</p>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.post}>
              <img src={img} alt="Doctor and patient" />
              <div className={styles["post-content"]}>
                <div className={styles["post-meta"]}>
                  <span>By Admin</span> <span>March 24, 2021</span>
                </div>
                <h2>A Wonder Serenity Has Taken Possession of My Entire Soul</h2>
                <p className={styles["post-text"]}>
                  A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy...
                  <span className={styles["more-text"]}>
                    {" "}
                    A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine.
                  </span>
                </p>
                <a href="blogDetails.html">
                  <label>
                    Read More <FontAwesomeIcon icon={faAngleDoubleRight}/>
                  </label>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.post}>
              <img src={img} alt="Doctor and patient" />
              <div className={styles["post-content"]}>
                <div className={styles["post-meta"]}>
                  <span>By Admin</span> <span>March 24, 2021</span>
                </div>
                <h2>A Wonder Serenity Has Taken Possession of My Entire Soul</h2>
                <p className={styles["post-text"]}>
                  A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy...
                  <span className={styles["more-text"]}>
                    {" "}
                    A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine.
                  </span>
                </p>
                <a href="blogDetails.html">
                  <label>
                    Read More <FontAwesomeIcon icon={faAngleDoubleRight}/>
                  </label>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className={styles.post}>
              <img src={img} alt="Doctor and patient" />
              <div className={styles["post-content"]}>
                <div className={styles["post-meta"]}>
                  <span>By Admin</span> <span>March 24, 2021</span>
                </div>
                <h2>A Wonder Serenity Has Taken Possession of My Entire Soul</h2>
                <p className={styles["post-text"]}>
                  A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy...
                  <span className={styles["more-text"]}>
                    {" "}
                    A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine.
                  </span>
                </p>
                <a href="blogDetails.html">
                  <label>
                    Read More <FontAwesomeIcon icon={faAngleDoubleRight}/>
                  </label>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsFeed
