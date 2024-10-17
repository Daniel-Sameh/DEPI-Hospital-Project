import React, { useState, useEffect, useRef } from 'react'
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartments } from '../../APIs/departmentsApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAppointment = ({ reference }) => {
  const dispatch = useDispatch();
  const departments = useSelector(state => state.departmentsData.departments); // Get departments from Redux
  useEffect(() => {
    // Fetch departments when the component mounts
    dispatch(fetchDepartments());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    name: '',
    department: '',
    phone: '',
    date: '',
  });

  const validateForm = () => {
    const { name, department, phone, date } = formData;
    console.log("Date from the form: ", date);
    console.log("Phone from the form: ", phone);
    console.log("DepId from the form: ", department);
    console.log("Name from the form: ", name);
    if (!name || !department || !phone || !date) {
      toast.error('All fields are required.');
      return false;
    }
    if (!/^01\d{9}$/.test(phone)) {
      toast.error('Phone number must start with "01" and be exactly 11 digits.');
      return false;
    }
    if(name.length<10){
      toast.error("Name must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      // Change the parameter from "department" to "departmentId"
      const submissionData = {
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        departmentId: formData.department,
      };
      // delete submissionData.department; // Remove the original "department" field

      console.log("FormData= ", JSON.stringify(submissionData));
      const response = await axios.post('http://localhost:5000/api/appointments/', JSON.stringify(submissionData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Appointment booked successfully:', response.data);
      toast.success('Appointment booked successfully!');
      // Optionally, reset the form after successful submission
      setFormData({
        name: '',
        department: '',
        phone: '',
        date: '',
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error("Sorry! Couldn't book an appointment due to server error");
    }
  };

  return (
    <section id={styles["book-appointment"]} >
      <div className="container-fluid">
        <div className="row">
          {/* Opening Hours */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id={styles.openings}>
            <p className="h2">24 Hours</p>
            <p className="h2">Opening Our Service</p>
            <div className={styles.timing}>
              <div className={styles.day}>
                <p>Saturday</p>
                <p>8:00 am-10:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Sunday</p>
                <p>6:00 am-8:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Monday</p>
                <p>6:00 am-2:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Tuesday</p>
                <p>7:00 am-9:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Wednesday</p>
                <p>10:00 am-12:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Thursday</p>
                <p>2:00 am-6:00 pm</p>
              </div>
              <div className={styles.day}>
                <p>Friday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Book An Appointment */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" id={styles["make-app"]} ref={reference}>
            <p className="h2">Make An</p>
            <p className="h2">Appointment</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={styles.in}
                value={formData.name}
                onChange={handleInputChange}
              />
              <select name="department"
                className={`form-select ${styles.in}`}
                value={formData.department}
                onChange={handleInputChange}>
                <option value="" >Select Department</option>
                {departments.map(department => (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className={styles.in}
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="date"
                className={styles.in}
                value={formData.date}
                onChange={handleInputChange}
              />
              <button type="submit">
                Appointment Now <FontAwesomeIcon icon={faAngleDoubleRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>

  )
}

export default BookAppointment
