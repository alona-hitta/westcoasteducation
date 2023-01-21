
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Teachers from './pages/Teachers/Teachers';
import Course from './pages/Courses/Course/Course';
import Teacher from './pages/Teachers/Teacher/Teacher';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import index from './styles/index.css'
function App() {
  return (
    <Router>
      <div className='App'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:courseId' element={<Course />}/>
            <Route path='/teachers' element={<Teachers />} />    
            <Route path='/teachers/:teacherId' element={<Teacher />}/>  
          </Routes>
          <Footer/>
          <div id="modal-root"></div>
        </div>
  </Router>
  );
}

export default App;
