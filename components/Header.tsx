
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Products' },
    { to: '/track-order', text: 'Track Order' },
    { to: '/support', text: 'Support' },
  ];

  const activeLinkClass = 'text-ozonxt-blue-light';
  const inactiveLinkClass = 'hover:text-ozonxt-blue-light transition-colors';

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-ozonxt-blue-dark">
          Ozon<span className="text-ozonxt-blue-light">xt</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg'}
            >
              {link.text}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="bg-ozonxt-blue-dark text-white px-6 py-2 rounded-full hover:bg-ozonxt-blue-light transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-ozonxt-blue-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg'}
              >
                {link.text}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="bg-ozonxt-blue-dark text-white w-full text-center px-6 py-2 rounded-full hover:bg-ozonxt-blue-light transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
