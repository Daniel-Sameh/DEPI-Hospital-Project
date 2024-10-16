import React, { useEffect } from 'react';
import styles from './Doctor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { fetchDoctor } from '../../APIs/doctorsApi';
import { CircleLoader, GridLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { fetchDepartment } from "../../APIs/departmentsApi";

const Doctor = () => {
  const { id } = useParams();  // Get the doctor ID from the URL
  const dispatch = useDispatch();
  const doctor = useSelector(state => state.doctorsData.doctor);
  const department = useSelector(state => state.departmentsData.department);
  // Fetch doctor details using Redux
  useEffect(() => {
    console.log("ID=", id);
    dispatch(fetchDoctor(id));
  }, [dispatch, id]);

  
  // if (doctor) {
  //   dispatch(fetchDepartment(doctor.departmentId));
  // }
  useEffect(() => {
    if (doctor && doctor.departmentId) {
      console.log("Fetching department with ID:", doctor.departmentId);
      dispatch(fetchDepartment(doctor.departmentId));
    }
  }, [dispatch, doctor]);

  console.log("the department: ", department);
  console.log("Fetched doctor data:", doctor);


  const handleBack = () => {
    window.history.back();
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Return Back
    </Tooltip>
  );
  if (!doctor||!department) {
    return (
      <>
        <div className={styles.back}>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <button onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
          </OverlayTrigger>
        </div>
        <GridLoader color="#0271ef" size={70} cssOverride={{ margin: '25rem 20px', marginTop: '40px' }} />
        <Footer />
      </>
    );
  }



  return (
    <>
      <div className={styles.back}>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <button onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
        </OverlayTrigger>
      </div>
      <div className={`container ${styles.doctorContainer} p-4`}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <img src={`http://localhost:5000/${doctor.image}`} alt={doctor.name} className={`${styles.doctorImage} img-fluid`} />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <h2 className={`${styles.doctorName} mt-3`}>Dr. {doctor.name}</h2>
            <h4 className={`text-muted ${styles.specialization}`} >{department.name}</h4>
            {/* <p className={`mt-3 ${styles.bio}`}>{bio}</p> */}
            <h5 className={`${styles.availabilityTitle} mt-4`}>Available Dates</h5>
            <ul className={`${styles.availabilityList}`}>
              {doctor.schedule && doctor.schedule.map((item, index) => {
                // Get the date from the object
                const data = item.split(',').map(part => part.trim());
                const date = data[0]; // Gets the first key (the date)
                const times = data[1]; // Gets the corresponding time slots
                return (
                  <li key={index}>
                    <strong>Date:</strong> {date}
                    <br />
                    <strong>Time Slots:</strong> {times}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctor;
