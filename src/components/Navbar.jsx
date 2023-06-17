import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/icons/img.png';


const Navbar = ({ user, signOut, cartItemCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showMenu]);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
    setShowMenu(false);
  };

  const handleLogout = () => {
    signOut();
    setShowMenu(false);
  };

  return (
    <nav className="bg-white shadow-lg flex justify-between items-center p-2 px-4">
      <div className="flex items-center">
        <div className="rounded-full flex items-center justify-center w-10 h-10 mr-2">
          <NavLink to="/" exact>
            <img src={logo} alt="Logo" className="w-8 h-8" />
          </NavLink>
        </div>
        {!isMobile && (
          <ul className="flex items-center ml-auto">
            <li className="mr-2">
              <NavLink
                to="/Services"
                className={`hover:text-gray-500 transition-colors ${
                  location.pathname === '/Services' ? 'text-green-400' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                Services
              </NavLink>
            </li>
            <li className="mr-2">
              <NavLink
                to="/contact"
                className={`hover:text-gray-500 transition-colors ${
                  location.pathname === '/Contact' ? 'text-green-400' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      {isMobile && (
        <div className="flex items-center ml-auto">
          <button
            className="text-gray-700 hover:text-gray-500 transition-colors focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      )}
      {isMobile && showMenu && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white h-full w-64 flex flex-col justify-start items-center p-4 absolute right-0 rounded-lg" ref={menuRef}>
            {user && (
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  {user.attributes.name || user.attributes.email}
                </p>
                <div className="bg-gray-100 rounded p-2 mb-2">
                  <NavLink
                    to="/services"
                    className={`hover:text-gray-500 transition-colors ${
                      location.pathname === '/contact' ? 'text-green-400' : ''
                    }`}
                    onClick={() => handleCategoryClick('contact')}
                  >
                    Services
                  </NavLink>
                </div>
                <div className="bg-gray-100 rounded p-2 mb-2">
                  <NavLink
                    to="/Contact"
                    className={`hover:text-gray-500 transition-colors ${
                      location.pathname === '/contact' ? 'text-green-400' : ''
                    }`}
                    onClick={() => handleCategoryClick('contact')}
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="bg-gray-100 rounded p-2 mb-2">
                  <button
                    className={`bg-green-400 text-white py-1 px-3 rounded hover:bg-green-200 transition-colors ${
                      location.pathname === '/logout' ? 'text-green-300' : ''
                    }`}
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!isMobile && user && (
        <div className="flex items-center">
          <p className="text-gray-700 mr-2">
            {user.attributes.name || user.attributes.email}
          </p>
          <button
            className={`bg-green-400 text-white py-1 px-3 rounded hover:bg-green-200 transition-colors ${
              location.pathname === '/logout' ? 'text-green-300' : ''
            }`}
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      )}
      {cartItemCount > 0 && (
        <div className="relative">
          <FaShoppingCart className="text-gray-700 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-black rounded-full px-1 text-xs">
            {cartItemCount}
          </span>
          as
        </div>
      )}
    </nav>
  );
};

export default Navbar;
