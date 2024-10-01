import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Blogs.module.css';
const Blogs = () => {
  const blogs = [
    {id:1, title:"A Wonder Serenity Has Taken Possession of My Entire Soul", image:"../../assets/images/01.jpg"}
  ]
  return (
    <>
      <Header title="From Our Blog" page="Home" info="Blogs" />
      <div className="container">
        {/* <!-- First Post --> */}
        <div className="row align-content-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">

          </div>
        </div>
        <div className={styles["post"]}>
          <img src="../../assets/images/01.jpg" alt="Doctor and patient"/>
            <div className={styles["post-content"]}>
              <div className={styles["post-meta"]}>
                <span>By Admin</span> <span>March 24, 2021</span>
              </div>
              <h2>A Wonder Serenity Has Taken Possession of My Entire Soul</h2>


              <p className={styles["post-text"]}>
                A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy...
                <span className={styles["more-text"]}> A wonder serenity has taken possession of my entire soul like these sweet mornings spring which enjoy with my whole heart. I am alone and feel the charm of existence in this spot which was created for the bliss of souls like mine. </span>
              </p>

              {/* <!-- Label for the first section --> */}
              <a href="blogDetails.html"><label>Read More <i className="fas fa-angle-double-right"></i></label></a>
            </div>
        </div>

        {/* <!-- Second Post --> */}
        <div className={styles["post"]}>
          <img src="assets/images/2 (1).jpg" alt="Doctor and patient"/>
            <div className={styles["post-content"]}>
              <div className="post-meta">
                <span>By Admin</span> <span>April 14, 2021</span>
              </div>
              <h2>The Charm of Existence in This Spot</h2>


              <p className={styles["post-text"]}>
                The charm of existence in this spot which was created for the bliss of souls like mine...
                <span className={styles["more-text"]}> I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment. </span>
              </p>

              {/* <!-- Label for the second section --> */}
              <a href="blogDetails.html"><label >Read More <i className="fas fa-angle-double-right"></i></label></a>
            </div>
        </div>

        {/* <!-- Third Post --> */}
        <div className={styles["post"]}>
          <div className="video">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
          </div>
          <div className={styles["post-content"]}>
            <div className="post-meta">
              <span>By Admin</span> <span>May 05, 2021</span>
            </div>
            <h2>Absorbed in the Exquisite Sense of Mere Tranquil Existence</h2>


            <p className={styles["post-text"]}>
              Absorbed in the exquisite sense of mere tranquil existence
            </p>

            {/* <!-- Label for the third section --> */}
            <a href="blogDetails.html"><label>Read More <i className="fas fa-angle-double-right"></i></label></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs
