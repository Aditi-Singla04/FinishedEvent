import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-[#000000] p-4 shadow-lg">
      <div className="container mx-auto flex flex-col m-0 p-0">
        <div className="flex justify-between items-center">
            <div className="text-white text-3xl font-bold px-6">Tickeve</div>
          
          <div className="flex items-center space-x-10 relative">

            <div className="px-34 text-lg ">
              <button
                onClick={handleDropdownClick}
                className="text-white focus:outline-none"
              >
                Shows
              </button>
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 bg-gray-700 text-white rounded-md shadow-lg w-48"
                >
                  <ul className="py-1">
                    
                    
                  </ul>
                </div>
              )}
            <Link className="text-white  px-8">
              About
            </Link>
          </div>
          <div className="mr-4">

            </div>
            <Link
              className="text-white py-2 px-5 rounded-xl border border-white"
            >
              Sign Up
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;