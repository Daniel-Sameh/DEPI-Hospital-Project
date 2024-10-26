import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Blogs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlog } from '../../APIs/blogsApi';
import { useParams } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { fetchDoctor, fetchDoctors } from '../../APIs/doctorsApi';
import Tooltip from 'react-bootstrap/Tooltip';
import { faBackward, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CircleLoader, GridLoader } from 'react-spinners';
import { formatDistanceToNow, format, parseISO } from 'date-fns';

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector(state => state.blogsData?.blog || {});
  const doctor = useSelector(state => state.doctorsData?.doctor || {});
  const createdAt = blog?.createdAt ? formatDistanceToNow(parseISO(blog.createdAt), { addSuffix: true }) : "";
  useEffect(() => {
    dispatch(fetchBlog(id));
    console.log("Fetching blog....");
  }, [dispatch, id]);
  useEffect(() => {
    console.log("The blog in here= ", blog)
    if (blog.author) {
      dispatch(fetchDoctor(blog.author));
    }
  }, [dispatch, blog])



  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Return Back
    </Tooltip>
  );
  const handleBack = () => {
    window.history.back();
  }

  if (!doctor || !blog ) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-2">
              <div className={styles.back}>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <button onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="col-lg-11 col-md-11 col-sm-10">
              <GridLoader color="#0271ef" size={70} cssOverride={{ margin: '25rem 20px', marginTop: '40px' }} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className={styles.first}><img src={`http://localhost:5000/${blog.image}`} alt={blog.title} className={styles["blog-image"]} /></div>
      <div className="container-fluid ">
        <div className={`justify-content-center row ${styles["blog-post"]}`}>
          <div className={`${styles.back} col-lg-1 col-md-3 col-sm-6 col-xs-6`}>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <button onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /></button>
            </OverlayTrigger>
          </div>
          <div className={`col-lg-10 col-md-9 ${styles["blog-content"]}`}>
            <h1>{blog.title}</h1>
          </div>
          <div className={`col-lg-12 col-md-12 ${styles.author} justify-content-center align-items-center`}>
            <img src={`http://localhost:5000/${doctor.image}`} alt={doctor.name} />
            <div>by <span>Dr.{doctor.name}</span>, <span>{createdAt}</span></div>
          </div>
          <div className={`justify-content-center gap-1 col-lg-10 col-md-10 ${styles.blogBody}`}>
            <div>{blog.body}</div>
          </div>
          {/* <div className={`justify-content-center col-lg-2 col-md-2`}>
            <p className="h4">About the doctor:</p>
            <div className={`${styles["moreBlogs"]}`}>
              <p>Doctor {doctor.name} is a doctor in Mukti hospital in the department number {doctor.departmentId}</p>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
