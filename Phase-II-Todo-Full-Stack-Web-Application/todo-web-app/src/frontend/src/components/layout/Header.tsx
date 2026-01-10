'use client';

import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header-modern text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaTasks className="text-2xl text-neon-pink" />
              <span className="text-xl font-bold neon-heading">TodoApp</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" passHref>
            <span className="nav-link">Home</span>
          </Link>
          <Link href="/dashboard" passHref>
            <span className="nav-link">Dashboard</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/signin" passHref>
              <span className="nav-link">Sign In</span>
            </Link>
            <Link href="/signup" passHref>
              <span className="btn-primary">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
