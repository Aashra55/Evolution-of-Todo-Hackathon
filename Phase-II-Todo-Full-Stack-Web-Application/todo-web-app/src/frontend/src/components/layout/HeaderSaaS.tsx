'use client';

import Link from 'next/link';
import { FaTasks } from 'react-icons/fa';

const HeaderSaaS = () => {
  return (
    <header className="header-saas">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="app-logo-saas flex items-center gap-3 cursor-pointer">
              <FaTasks className="icon text-2xl" />
              <span className="text text-xl">TodoApp</span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" passHref>
            <span className="nav-link-saas">Home</span>
          </Link>
          <Link href="/dashboard" passHref>
            <span className="nav-link-saas">Dashboard</span>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link href="/signin" passHref>
            <span className="btn-secondary-saas">Sign In</span>
          </Link>
          <Link href="/signup" passHref>
            <span className="btn-primary-saas">Sign Up</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSaaS;
