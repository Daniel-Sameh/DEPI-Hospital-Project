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

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [likesVisible, setLikesVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchBlog(id));
    console.log("Fetching blog....");
  }, [dispatch, id]);

  const blog = useSelector(state => state.blogsData?.blog || {});

  return (
    <>
      <Header title={blog.title} page="Blogs" info="Blog" />
      <div className="container mt-5">
        <div className={styles["blog-post"]}>
          <img src={blog.image} alt={blog.title} className={styles["blog-image"]} />
          <div className={styles["blog-content"]}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <div 
              className={styles["likes-container"]} 
              onMouseEnter={() => setLikesVisible(true)} 
              onMouseLeave={() => setLikesVisible(false)}
            >
              <FontAwesomeIcon icon={faHeart} className={styles["like-icon"]} />
              <span className={styles["like-count"]}>{blog.likes?.length || 0}</span>
              {likesVisible && (
                <div className={styles["likes-tooltip"]}>
                  <p>Liked by:</p>
                  <ul>
                    {blog.likes?.map((like, index) => (
                      <li key={index}>User {like.userId}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
