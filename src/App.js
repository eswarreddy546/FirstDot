import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
