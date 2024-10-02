import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route, Path } from 'react-router-dom';
import Home from './components/Home/Home';
import HomeFooter from './components/HomeFooter/HomeFooter';
import ContactUs from './components/ContactUs/ContactUs';
import Doctors from './components/Doctors/Doctors';
import Doctor from './components/Doctor/Doctor';
import Blogs from './components/Blogs/Blogs';

function App() {
  document.title='MOKTI | Best For Medical';
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes >
          <Route path='/' element={<><Home /><HomeFooter/></>} />
          <Route path='/departments' element={<>departments</>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctor/:id' element={<Doctor />}/>
          <Route path='/services' element={<>services</>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/about' element={<>about</>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
