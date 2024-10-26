import React from 'react'
import styles from '../Home/About.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../assets/images/6.png"
import img1 from "../../assets/images/1 (1).png";
import img2 from "../../assets/images/2 (1).png";
import img3 from "../../assets/images/3 (1).png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
import { Fade } from 'react-awesome-reveal';
const Companies = ({black}) => {
  return (
    <section className={styles["company-list"]}>
      <Fade cascade damping={0.2}>
      <img src={img} alt=""  className={styles[`${black}`]}/>
      <img src={img1} alt="" className={styles[`${black}`]}/>
      <img src={img2} alt="" className={styles[`${black}`]}/>
      <img src={img3} alt="" className={styles[`${black}`]}/>
      <img src={img4} alt="" className={styles[`${black}`]}/>
      <img src={img5} alt="" className={styles[`${black}`]}/>
      </Fade>
    </section>
  )
}

export default Companies
