import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Doctors.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctors } from '../../APIs/doctorsApi'
import { fetchDepartments } from '../../APIs/departmentsApi'
const Doctors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Our Doctors | MUKTI";
    dispatch(fetchDoctors());
    dispatch(fetchDepartments());
  }, [])

  const [department, setDepartment] = useState("");
  // const [dateAvailability, setDateAvailability] = useState("");

  // Sample data for filters (can be dynamic)
  const departments = useSelector(state=>state.departmentsData.departments);
  const doctors= useSelector(state=>state.doctorsData.doctors);
  console.log(doctors[0]);
  useEffect(()=>{
    console.log("doctors:",doctors);
    console.log("departments:", departments);
  },[doctors,departments])
  
  // const filteredDoctors = doctors.filter(doctor =>
  //   (department ? doctor.departmentName === department : true) 
  // );
  // const completeDoctors = filteredDoctors.map((doctor) => ({
  //   ...doctor,
  //   departmentName: departments.find((department) => department._id === doctor.departmentId)?.name,
  // }));
  let filteredDoctors = doctors.map((doctor) => ({
    ...doctor,
    departmentName: departments.find((department) => department._id === doctor.departmentId)?.name,
  }));
  filteredDoctors = filteredDoctors.filter(doctor =>
    (department ? doctor.departmentId === department : true) 
  );
  // console.log("Complete doctors: ", completeDoctors);
  // console.log("filteredDoctors: ",filteredDoctors);
  // console.log("doctors!!!!", doctors);
  // console.log("departments!!!!", departments);
  // console.log("current dep: ",department);
  useEffect(()=>{
    console.log("Choice: ",department);
    console.log("filtered doctors after choose: ",filteredDoctors);
  },[department]);

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
                  <label htmlFor="departments">Departments:</label>
                  <select
                    id="departments"
                    className="form-select"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="">All Departments</option>
                    {departments.map((spec, index) => (
                      <option key={index} value={spec._id}>{spec.name}</option>
                    ))}
                  </select>
                </div>

                {/* <div className={styles.filterGroup}>
                  <label htmlFor="dateAvailability">Date Availability:</label>
                  <input
                    type="date"
                    id="dateAvailability"
                    className="form-control"
                    value={dateAvailability}
                    onChange={(e) => setDateAvailability(e.target.value)}
                  />
                </div> */}
              </div>
            </aside>
            {/* Doctors Section */}
            <section id={styles["doctors"]} className="col-lg-9">


              <div className="container">
                <div className="row g-3 justify-content-center align-content-center">
                  {filteredDoctors.map((doctor, index) => (
                    <div key={doctor._id} className="col-lg-4 col-md-4 col-sm-6 col-xs-6" style={{maxWidth:"17rem"}}>
                      <div className={`card ${styles.doctor}`}>
                        <a href={`/doctor/${doctor._id}`}>
                          <img src={`http://localhost:5000/${doctor.image}`} alt="doctor" className="card-img-top" />
                          <div className={styles.content}>
                            <p className={`h6 ${styles.h6}`}>{doctor.name}</p>
                            <p className={styles.job}>{doctor.departmentName}</p>
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
