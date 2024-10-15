import React, { useEffect } from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/01 (1).jpg'
import img1 from '../../assets/images/02 (1).jpg'
import img2 from '../../assets/images/03 (1).jpg'
import img3 from '../../assets/images/04 (1).jpg'
import { Slide, Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../APIs/doctorsApi'
const DoctorsInfo = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchDoctors())
  },[]);
  const doctors= useSelector(state=>state.doctorsData.doctors).slice(0,4);

  return (
    <section className={styles["doctors-section"]}>
      <p className={`h3 ${styles.h3}`}>Meet Our</p>
      <p className="h2">Mukti Professional Doctors</p>
      
      <div className={styles["doctors-container"]} style={{overflow:'hidden'}}>
      <Slide cascade damping={0.1} direction='down' triggerOnce>
        {doctors.map((doct,idx)=>{
          return <div className={styles["doctor-card"]} key={doct.id}>
          <img src={doct.image} alt={doct.name} />
          <div className={styles["doctor-info"]} id={doct.id==1?styles["first-doc"]:doct.id==2?styles["second-doc"]:doct.id==3?styles["third-doc"]:styles["fourth-doc"]}>
            <h3>{`Dr. ${doct.name}`}</h3>
            <p>{doct.specialization}</p>
          </div>
          <div className={styles.contacts}>
            <p>
              <span>Phone:</span> {doct.phone}
            </p>
            <p>
              <span>Email:</span> {doct.email}
            </p>
          </div>
        </div>
        })}
        
        </Slide>
      </div>
      
      <a href="/doctors">
        <button className={styles["view-all-btn"]}>View All Doctors »</button>
      </a>
    </section>

  )
}

export default DoctorsInfo
