import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/Home/homePage';
import Projects from './components/Projects/projects';
import Contacts from './components/Contact/contact';
import Resume from './components/Resume/resume';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (  
    <BrowserRouter>
    <div className="App">
      <Navbar />
  

      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/contact' element={<Contacts/>} />
        <Route exact path='/resume' element={<Resume/>} />
      </Routes>

    </div>
  </BrowserRouter>
);
}


export default App;