import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Blogs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../../APIs/blogsApi';
import { fetchDoctor, fetchDoctors } from '../../APIs/doctorsApi';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { CircleLoader, GridLoader } from 'react-spinners';
import { faBackward, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs= useSelector(state=>state.blogsData.blogs);
  const authors = useSelector(state => state.doctorsData.doctors);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [isLoadingDoctors, setIsLoadingDoctors] = useState(true);
  useEffect(() => {
    dispatch(fetchBlogs()).then(() => setIsLoadingBlogs(false));

    dispatch(fetchDoctors()).then(() => setIsLoadingDoctors(false));
    
  }, [dispatch]);
  console.log("Blogs!!!: ",blogs);
  const enrichedBlogs = blogs && authors.length > 0 ? blogs.map(blog => ({
    ...blog,
    doctor: authors.find(doctor => doctor._id === blog.author)?.name || "Unknown",
  })) : [];
  
  console.log("enrichedBlogs inside BLOGS: ", enrichedBlogs);

  
  const handleBack = () => {
    window.history.back();
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Return Back
    </Tooltip>
  );
  if(isLoadingBlogs||isLoadingDoctors){
    return (
      <>
        
        <GridLoader color="#0271ef" size={70} cssOverride={{ margin: '25rem 20px', marginTop: '40px' }} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header title="From Our Blog" page="Home" info="Blogs" />
      <div className="container">
        <div className="row align-content-center justify-content-center">
          {enrichedBlogs.map((blog) => (
            <div key={blog._id} className="col-lg-6 col-md-6 col-sm-12">
              <div className={styles["post"]}>
                <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} />
                <div className={styles["post-content"]}>
                  <div className={styles["post-meta"]}>
                    <span>By {blog.doctor}</span> <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2>{blog.title}</h2>
                  <p className={styles["post-text"]}>
                    {blog.body.slice(0, 100)}... {/* Displaying a snippet of the body */}
                    <span className={styles["more-text"]}>
                      {blog.body.slice(100)} {/* The rest of the body can be hidden */}
                    </span>
                  </p>
                  <a href={`/blogs/${blog._id}`}>
                    <label style={{cursor:"pointer"}}>Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></label>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
