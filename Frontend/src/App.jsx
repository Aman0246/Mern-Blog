
import './App.css'
import Navebar from './Components/Navebar'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Register from './Pages/Register'
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import SingleBlog from './Pages/SingleBlog';
import CreateBlog from './Pages/CreateBlog';
import Contact from './Pages/Contact/Contact';
axios.defaults.baseURL = import.meta.env.VITE_PORT;
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <Navebar></Navebar>
     
      <Routes>
        {/* <Route path='/' element={ <Cp/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>

    </>
  )
}

export default App
