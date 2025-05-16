import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-teal-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="/favicon.svg" 
            alt="Logo MTsN 9 Jombang"
            className="h-12 w-12 mr-2"
          />
          <div>
            <h1 className="text-xl font-bold tracking-wide">MTsN 9 Jombang</h1>
            <p className="text-xs text-teal-200">Madrasah Tsanawiyah Negeri</p>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link 
                to="/check-results" 
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Cek Kelulusan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;