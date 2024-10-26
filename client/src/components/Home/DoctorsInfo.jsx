import React, { useEffect } from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide, Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../APIs/doctorsApi'
import { fetchDepartment,fetchDepartments } from '../../APIs/departmentsApi';
const DoctorsInfo = () => {
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchDoctors());
  //   // 
  // },[]);

  const doctors= useSelector(state=>state.doctorsData.doctors).slice(0,4);
  // let completeDoctors= doctors;
  // useEffect(()=>{
  //   dispatch(fetchDepartments());
  //   console.log("DEPARTMENTS: ",departments)
  //   completeDoctors = doctors.map(doctor => {
  //     // Find the department associated with the current doctor
  //     console.log("DEPARTMENTS inside: ",departments)
  //     let department = departments.find(dep => dep._id === doctor.departmentId);
      
  //     // department = {dep: department.name};
  //     console.log("Cur dep:", department);
  //     // console.log("Cur Doctor: ",{ ...doctor, department:department.name});
  //     let doc= doctor;
  //     doc.department = department.name;
  //     return doc; // Return a new object with the department included
  //   });
  //   console.log("complete Doctors: ",completeDoctors)
  // },[dispatch]);
  const departments = useSelector(state => state.departmentsData.departments); 
  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchDepartments());
    
    

  }, [dispatch]);

  // Enrich doctor data with department names
  const completeDoctors = doctors.map((doctor) => ({
    ...doctor,
    departmentName: departments.find((department) => department._id === doctor.departmentId)?.name,
  }));
  useEffect(()=>{
    console.log("Departments:", departments);
    console.log("Doctors:", doctors);
    console.log(completeDoctors)
  },[doctors,departments]);
  // console.log("DepartmentS: ",departments)
  
  // console.log(completeDoctors)
  return (
    <section className={styles["doctors-section"]}>
      <p className={`h3 ${styles.h3}`}>Meet Our</p>
      <p className="h2">Mukti Professional Doctors</p>
      
      <div className={styles["doctors-container"]} style={{overflow:'hidden'}}>
      <Slide cascade damping={0.1} direction='down' triggerOnce>
        {completeDoctors.map((doct,idx)=>{
          return <div className={styles["doctor-card"]} key={doct._id}>
          <img src={`http://localhost:5000/${doct.image}`} alt={doct.name} />
          <div className={styles["doctor-info"]} id={idx==0?styles["first-doc"]:idx==1?styles["second-doc"]:idx==2?styles["third-doc"]:styles["fourth-doc"]}>
            <h3>{`Dr. ${doct.name}`}</h3>
            <p>{doct.departmentName}</p>
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
