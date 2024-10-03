import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentAd from './AppointmentAd';
import About from './About';
import Departments from './DepartmentsSection';
import DoctorsInfo from './DoctorsInfo';
import BookAppointment from './BookAppointment';
import NewsFeed from './NewsFeed';
import Companies from './Companies';
import NewsLetter from './NewsLetter';
import HomeFooter from '../HomeFooter/HomeFooter';
import { Fade } from "react-awesome-reveal";
const Home = () => {
  document.title='MOKTI | Best For Medical';
  
  const book = useRef(null);
  
  const handleClick=()=>{
    // console.log("The book ref: ", book.current);
    if(book.current){
      book.current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
    // const bookAppointmentElement = document.getElementById('book-appointment');
    // console.log(bookAppointmentElement);
    // if (bookAppointmentElement) {
    //   bookAppointmentElement.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  return (
    <>
     <AppointmentAd handleClick={handleClick}/>
     <About/>
     <Departments handleClick={handleClick}/>
     <DoctorsInfo/>
     <BookAppointment  reference={book}/>
     <NewsFeed/>
     <Companies black={'false'}/>
     <NewsLetter/>
    </>
  )
}

export default Home
