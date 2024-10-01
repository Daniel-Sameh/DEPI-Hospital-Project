import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Doctors.module.css'
import jason from "../../assets/images/01 (1).jpg"
import patricia from "../../assets/images/02 (1).jpg"
import william from "../../assets/images/03 (1).jpg"
import eric from "../../assets/images/04 (1).jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
const Doctors = () => {
  useEffect(() => {
    document.title = "Our Doctors | MUKTI";
  }, [])
  const [specialization, setSpecialization] = useState("");
  const [dateAvailability, setDateAvailability] = useState("");

  // Sample data for filters (can be dynamic)
  const specializations = ["Cardiologist", "Pediatrist", "Throat Specialist", "Therapist"];
  const doctors = [
    { id:1, name: "Dr. Jason Kovalsky", specialization: "Cardiologist", img: jason },
    { id:2, name: "Patricia Mcneel", specialization: "Pediatrist", img: patricia },
    { id:3, name: "Patricia Mcneel", specialization: "Pediatrist", img: patricia },
    { id:4, name: "William Khanna", specialization: "Throat Specialist", img: william },
    { id:5, name: "William Khanna", specialization: "Throat Specialist", img: william },
    { id:6, name: "Eric Patterson", specialization: "Therapist", img: eric },
    { id:7, name: "Eric Patterson", specialization: "Therapist", img: eric },
  ];

  // Filter logic (basic, modify as per your needs)
  const filteredDoctors = doctors.filter(doctor =>
    (specialization ? doctor.specialization === specialization : true) &&
    (dateAvailability ? doctor.dateAvailable === dateAvailability : true)
  );

  return (
    <>
      <Header title="Our Professional Team" page="Home" info="Doctors" />
      <div className={styles.title}>
        <p className={`h3 ${styles.h3}`}>Meet Our</p>
        <p className="h2">Mukti Professional Doctors</p>
      </div>
      <div className={styles.doctorSection}>
        {/* Main Section */}
        <div className="container-fluid">
          <div className="row align-content-center justify-content-center">
            
            {/* Sidebar Section */}
            <aside className="col-lg-3 mt-4 mt-lg-0">
              <div className={styles.sidebar}>
                <h4>Filter Doctors</h4>
                <div className={styles.filterGroup}>
                  <label htmlFor="specialization">Specialization:</label>
                  <select
                    id="specialization"
                    className="form-select"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  >
                    <option value="">All Specializations</option>
                    {specializations.map((spec, index) => (
                      <option key={index} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.filterGroup}>
                  <label htmlFor="dateAvailability">Date Availability:</label>
                  <input
                    type="date"
                    id="dateAvailability"
                    className="form-control"
                    value={dateAvailability}
                    onChange={(e) => setDateAvailability(e.target.value)}
                  />
                </div>
              </div>
            </aside>
            {/* Doctors Section */}
            <section id={styles["doctors"]} className="col-lg-9">


              <div className="container">
                <div className="row g-3 justify-content-center align-content-center">
                  {filteredDoctors.map((doctor, index) => (
                    <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-6" style={{maxWidth:"17rem"}}>
                      <div className={`card ${styles.doctor}`}>
                        <a href={`/doctor/${doctor.id}`}>
                          <img src={doctor.img} alt="doctor" className="card-img-top" />
                          <div className={styles.content}>
                            <p className={`h6 ${styles.h6}`}>{doctor.name}</p>
                            <p className={styles.job}>{doctor.specialization}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Doctors
