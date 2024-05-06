import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/ContactDetails/Contact';
import Logins from './Components/Login/Logins';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Logins' element={<Logins/>}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
