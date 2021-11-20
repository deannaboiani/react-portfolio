import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/homePage';
import Contacts from './components/contact';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (  
    <BrowserRouter>
    <div className="App">
      <Navbar />
  

      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/contact' element={<Contacts/>} />
      </Routes>

    </div>
  </BrowserRouter>
);
}


export default App;