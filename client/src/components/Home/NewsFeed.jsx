import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheck, faUserInjured, faUserMd, faFirstAid, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import styles from '../Home/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/images/01.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../APIs/blogsApi';
import { formatDistanceToNow,format,parseISO } from 'date-fns';
import { fetchDoctor, fetchDoctors } from '../../APIs/doctorsApi';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const blogs= useSelector(state=>state.blogsData.blogs);
  const authors = useSelector(state => state.doctorsData.doctors);
  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchDoctors());
  }, [dispatch]);
  console.log("Blogs!!!: ",blogs);
  const enrichedBlogs = blogs.map(blog => ({
    ...blog,
    doctor: authors.find(doctor => doctor._id === blog.author).name,
  }));
  console.log("enrichedBlogs: ", enrichedBlogs);
   // useEffect(() => {
  //   // When blogs are fetched, get the authors
  //   if (blogs.length > 0) {
  //     blogs.forEach(blog => {
  //       blog.doctor = authors.find(doctor=> doctor._id===blog.author);
  //     });
  //   }
  // }, [dispatch, blogs, authors]);
  return (
    <section id={styles["news-feed"]}>
      <p className={`h3 ${styles.h3}`}>News Feed</p>
      <p className={`h2 ${styles.h2}`}>Be The First To New Stories</p>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {
            enrichedBlogs.map((post) => {
              // console.log(post.image)
              let formattedDate = "";
              if(post.createdAt) formattedDate = formatDistanceToNow(parseISO(post.createdAt), { addSuffix: true });
              // console.log(post.createdAt);
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={post.id}>
                  <div className={styles.post}>
                    <img src={`http://localhost:5000/${post.image}`} alt="Doctor and patient" />
                    <div className={styles["post-content"]}>
                      <div className={styles["post-meta"]}>
                        <span>By {post.doctor}</span>, <span>{formattedDate}</span>
                      </div>
                      <h2>{post.title.slice(0,50)}...</h2>
                      <p className={styles["post-text"]}>
                        {post.body.slice(0,150)}...
                      </p>
                      <a href={`/blogs/${post._id}`}>
                        <label style={{cursor:"pointer"}}>
                          Read More <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </label>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
    </section>
  )
}

export default NewsFeed
