import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Header from './components/Header';
import Appointment from './Pages/Appointment';
import Department from './Pages/Department';
import Contact from './Pages/Contact';
import Doctor  from './Pages/Doctor';
import About from './Pages/About';
import UserProfile from './Pages/UserProfile';
import Booking from './Pages/Booking';

export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>

    <Route path='/'  element={<Home/>} />
    <Route path='/login'  element={<Login/>} />
    <Route path='/signup'  element={<Signup/>} />
    <Route path='/appointment'  element={< Appointment />} />
    <Route path='/department'  element={<Department/>} />
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/doctor'  element={<Doctor/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/user-profile'  element={<UserProfile/>} />
    <Route path='/booking' element={<Booking/>}/>

   </Routes>
   </BrowserRouter>
  )
}

