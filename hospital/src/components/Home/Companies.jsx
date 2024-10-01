import React from 'react'
import styles from '../Home/About.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../assets/images/6.png"
import img1 from "../../assets/images/1 (1).png";
import img2 from "../../assets/images/2 (1).png";
import img3 from "../../assets/images/3 (1).png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
const Companies = () => {
  return (
    <section className={styles["company-list"]}>
      <img src={img} alt="" />
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
    </section>
  )
}

export default Companies
