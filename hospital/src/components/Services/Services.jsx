import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Services.module.css'
import img1 from '../../assets/images/01.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    return (
        <>
            <Header title="Our Best Services" page="Home" info="Services" />
            <div className={styles.servicesContainer}>
                <div className={styles.imageContainer}>
                    <img src={img1} alt="Doctor with a patient" />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.title}>Family Health Solutions</p>
                    <p>
                        Proceed arrain manu produc rather conve quvat mantan this conven
                        multscplinari testin motin was procedur aamng proceed arrain manu
                        produc rather conve quvat mantan this convenmultscplinari testiners
                        motin was procedur arramin
                    </p>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Services
