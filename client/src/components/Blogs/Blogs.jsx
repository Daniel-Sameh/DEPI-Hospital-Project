import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Blogs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../../APIs/blogsApi';

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
    console.log("Fetching blogs....");
  }, [dispatch]);

  const blogs = useSelector(state => state.blogsData?.blogs || []);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return (
    <>
      <Header title="From Our Blog" page="Home" info="Blogs" />
      <div className="container">
        <div className="row align-content-center justify-content-center">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-lg-12 col-md-6 col-sm-12">
              <div className={styles["post"]}>
                <img src={blog.image} alt={blog.title} />
                <div className={styles["post-content"]}>
                  <div className={styles["post-meta"]}>
                    <span>By Admin</span> <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2>{blog.title}</h2>
                  <p className={styles["post-text"]}>
                    {blog.content.slice(0, 100)}... {/* Displaying a snippet of the content */}
                    <span className={styles["more-text"]}>
                      {blog.content.slice(100)} {/* The rest of the content can be hidden */}
                    </span>
                  </p>
                  <a href={`/blogs/${blog._id}`}>
                    <label>Read More <FontAwesomeIcon icon={faAngleDoubleRight} /></label>
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
