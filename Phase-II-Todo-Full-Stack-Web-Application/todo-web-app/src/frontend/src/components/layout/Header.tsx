'use client';

import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header-modern sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex items-center gap-3 cursor-pointer">
              <FaTasks className="text-3xl text-neon-pink" />
              <span className="text-2xl font-bold app-title">TodoApp</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" passHref>
            <span className="nav-link">Home</span>
          </Link>
          <Link href="/dashboard" passHref>
            <span className="nav-link">Dashboard</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/signin" passHref>
            <span className="btn-secondary">Sign In</span>
          </Link>
          <Link href="/signup" passHref>
            <span className="btn-primary">Sign Up</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
