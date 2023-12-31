import React from 'react';
import { Link } from 'react-router-dom';
import logo from './HOSorangelogo.png';

export default function NavBar() {
  return (
    <div className='navbar-container'>
        <img src={logo} alt="HOS Logo" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto"/>
        <nav className="navbar my-6">
            <ul className='space-y-4 text-white text-center'>
                <li className='hover:underline'><Link to="/">Home</Link></li>
                <li className='hover:underline'><Link to="/about">About</Link></li>
                <li className='hover:underline'><Link to="/events">Events</Link></li>   
                <li className='hover:underline'><Link to="/execs">Execs</Link></li>
                <li className='hover:underline'><Link to="/contact">Contact</Link></li>     
            </ul>
        </nav>
    </div>
  )
}
