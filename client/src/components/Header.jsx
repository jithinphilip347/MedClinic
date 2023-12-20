import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='bg-cyan-800/75' >
      
        <div className='flex justify-between items-center max-w-6xl mx-auto  p-5  px-1 pr-96	'>
          <Link to='/'>
          <h1 className='font-bold text-white'>MedClinic</h1>
          </Link>
            <ul className='flex gap-4 text-white'>
              <Link to='/'>
              <li>Home</li>
              </Link>
                
                <Link to='/doctor'>
                <li>Doctors</li>
              </Link>
                
                <Link to='/department'>
                <li>Departments</li>
              </Link>
                
                <Link to='/appointment'>
                <li>Appointments</li>
              </Link>
               
                <Link to='/contact'>
                <li>Contact Us</li>

              </Link>
                <Link to='/about'>
                <li>About</li>
              </Link>
               
                <Link to='/booking'>
                <li>Bookings</li>
              </Link>
            </ul>
        </div>
    </div>
  
  )
}
