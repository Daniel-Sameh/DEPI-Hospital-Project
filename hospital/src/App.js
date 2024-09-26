import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route, Path } from 'react-router-dom';
import Home from './components/Home/Home';
import HomeFooter from './components/HomeFooter/HomeFooter';
function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes >
          <Route path='/' element={<><Home /><HomeFooter/></>} />
          <Route path='/departments' element={<>departments</>}/>
          <Route path='/doctors' element={<>doctors</>}/>
          <Route path='/services' element={<>services</>}/>
          <Route path='/blogs' element={<>blogs</>}/>
          <Route path='/about' element={<>about</>}/>
          <Route path='/contact' element={<>contact</>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
