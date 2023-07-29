
import './App.css'
import Navebar from './Components/Navebar'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from './Pages/Register'
import axios from 'axios';

import { Routes, Route } from "react-router-dom";
import SingleBlog from './Pages/SingleBlog';
axios.defaults.baseURL = import.meta.env.VITE_PORT;
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <Navebar></Navebar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>

    </>
  )
}

export default App
