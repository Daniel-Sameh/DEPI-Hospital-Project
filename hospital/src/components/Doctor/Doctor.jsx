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

const Doctor = () => {
  const { id } = useParams();  // Get the doctor ID from the URL
  const dispatch = useDispatch();

  // Fetch doctor details using Redux
  useEffect(() => {
    dispatch(fetchDoctor(id));  // Fetch doctor based on ID from params
  }, [dispatch, id]);

  // Get doctor data from Redux store
  const doctor = useSelector(state => state.doctorsData.doctor);  // Access doctor data correctly

  console.log("Fetched doctor data:", doctor);

  if (!doctor) {
    return (
      <>
        <GridLoader color="#0271ef" size={70} cssOverride={{ margin: '25rem 20px', marginTop: '40px' }} />
        <Footer />
      </>
    );
  }

  // Destructure doctor properties (ensure API response matches this structure)
  const { name, specialization, image, bio, availability } = doctor;

  const handleBack = () => {
    window.history.back();
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Return Back
    </Tooltip>
  );
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
            <img src={image} alt={name} className={`${styles.doctorImage} img-fluid`} />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <h2 className={`${styles.doctorName} mt-3`}>Dr. {name}</h2>
            <h4 className={`text-muted ${styles.specialization}`}>{specialization}</h4>
            <p className={`mt-3 ${styles.bio}`}>{bio}</p>
            <h5 className={`${styles.availabilityTitle} mt-4`}>Available Dates</h5>
            <ul className={`${styles.availabilityList}`}>
              {availability && availability.map((date, index) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctor;
