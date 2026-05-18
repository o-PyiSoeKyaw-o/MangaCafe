import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-md bg-[#fdfbf7]/80 border-b border-[#ebdccb]/70 py-3.5'>
      <div className='container mx-auto px-6 flex justify-between items-center gap-4'>
        
        {/* Brand Logo */}
        <Link to='/' className='text-2xl font-black tracking-wider text-[#8c7853] uppercase transition-colors duration-200 hover:text-[#736243]'>
          Manga <span className='text-black'>Cafe</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className='hidden md:flex items-center gap-8'>
          <li>
            <NavLink 
              to='/' 
              className={({ isActive }) => 
                `text-sm font-bold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#8c7853]' : 'text-[#6b5e5c] hover:text-[#362b2a]'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/series' 
              className={({ isActive }) => 
                `text-sm font-bold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#8c7853]' : 'text-[#6b5e5c] hover:text-[#362b2a]'}`
              }
            >
              Series
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/contact' 
              className={({ isActive }) => 
                `text-sm font-bold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#8c7853]' : 'text-[#6b5e5c] hover:text-[#362b2a]'}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Search Bar & Action Buttons */}
        <div className='flex items-center gap-4 flex-1 md:flex-none justify-end max-w-md md:max-w-none w-full md:w-auto'>
          
          {/* Modern Cream Search Input */}
          <div className='relative w-full max-w-[240px] hidden sm:block'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg className='w-4 h-4 text-[#a1928e]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </span>
            <input 
              type='text' 
              placeholder='Search manga, manhwa...' 
              className='w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#ebdccb] rounded-full text-[#362b2a] placeholder-[#a1928e] focus:outline-none focus:ring-2 focus:ring-[#8c7853]/20 focus:border-[#8c7853] transition-all duration-200 shadow-inner'
            />
          </div>

          {/* Warm Coziness Auth Buttons */}
          <div className='hidden xs:flex items-center gap-2 shrink-0'>
            <button className='text-sm font-bold text-[#6b5e5c] hover:text-[#362b2a] px-4 py-2 rounded-full transition-colors duration-200'>
              Login
            </button>
            <button className='text-sm font-bold bg-[#8c7853] hover:bg-[#736243] text-white px-5 py-2 rounded-full shadow-sm shadow-[#8c7853]/10 transition-all duration-200 transform hover:-translate-y-0.5'>
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='md:hidden p-2 text-[#6b5e5c] hover:text-[#362b2a] focus:outline-none'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#fdfbf7] border-b border-[#ebdccb] px-6 py-4 space-y-4 shadow-sm animate-fadeIn'>
          <div className='relative w-full sm:hidden block'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg className='w-4 h-4 text-[#a1928e]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </span>
            <input 
              type='text' 
              placeholder='Search manga, manhwa...' 
              className='w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#ebdccb] rounded-full text-[#362b2a] placeholder-[#a1928e] focus:outline-none shadow-inner'
            />
          </div>
          <ul className='space-y-3'>
            <li>
              <NavLink to='/' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-sm font-bold ${isActive ? 'text-[#8c7853]' : 'text-[#6b5e5c]'}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/series' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-sm font-bold ${isActive ? 'text-[#8c7853]' : 'text-[#6b5e5c]'}`}>Series</NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-sm font-bold ${isActive ? 'text-[#8c7853]' : 'text-[#6b5e5c]'}`}>Contact</NavLink>
            </li>
          </ul>
          <div className='pt-2 flex items-center gap-4 xs:hidden'>
            <button className='text-sm font-bold text-[#6b5e5c] w-full text-left py-2'>Login</button>
            <button className='text-sm font-bold bg-[#8c7853] text-white px-4 py-2 rounded-xl w-full text-center shadow-sm'>Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;