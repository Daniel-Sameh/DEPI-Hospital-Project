import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './DepartmentsPage.module.css'
import PlasticSurgery from '../../assets/images/01.png'
import Rhinology from '../../assets/images/03.png'
import Urology from '../../assets/images/03.png'
import Gastroenterology from '../../assets/images/04.png'
import HeartSurgery from '../../assets/images/05.png'
import Pulmonology from '../../assets/images/06.png'
import Otology from '../../assets/images/01.png'
import DentalCare from '../../assets/images/08.png'
import Orthopedics from '../../assets/images/09.png'
import EyeCare from '../../assets/images/07.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const DepartmentsPage = () => {
    const departments = [ 
        { name: 'Plastic Surgery', img:PlasticSurgery },
        { name: 'Rhinology', img: Rhinology},
        { name: 'Urology', img: Urology },
        { name: 'Gastroenterology', img: Gastroenterology },
        { name: 'Heart Surgery', img: HeartSurgery },
        { name: 'Pulmonology', img: Pulmonology },
        { name: 'Otology', img: Otology },
        { name: 'Dental Care', img: DentalCare  },
        { name: 'Orthopedics', img:Orthopedics },
        { name: 'Eye Care', img: EyeCare },
    ];
    return (
        <>
            <Header title="Department the Mukti" page="Home" info="Department" />
            <section id={styles.departments}>
                <p className={`h3 ${styles.h3}`}>We are the</p>
                <p className={`h2 ${styles.h2}`}>Best of our department center</p>
                <div className={styles.container}>
                    <div className="row justify-content-center align-items-center">
                        {departments.map((department, index) => (
                            <div key={index} className={`col-lg-2 col-md-3 col-sm-4 col-xs-6 ${styles["department"]}`}>
                                <p className={styles.h6}>{department.name}</p>
                                <img src={department.img} alt={department.name} />
                                <a href="#">
                                    Read More <i className="fas fa-angle-double-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default DepartmentsPage;
