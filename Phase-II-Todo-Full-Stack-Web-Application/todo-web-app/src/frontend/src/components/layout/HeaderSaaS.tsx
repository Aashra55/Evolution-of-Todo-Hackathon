'use client';

import Link from 'next/link';
import { FaTasks, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const HeaderSaaS = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
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

          {/* Center: Desktop Navigation */}
          <div className="desktop-nav items-center gap-8">
            <Link href="/" passHref>
              <span className="nav-link-saas">Home</span>
            </Link>
            <Link href="/dashboard" passHref>
              <span className="nav-link-saas">Dashboard</span>
            </Link>
          </div>

          {/* Right: Actions & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="desktop-actions items-center gap-4">
              <Link href="/signin" passHref>
                <span className="btn-secondary-saas">Sign In</span>
              </Link>
              <Link href="/signup" passHref>
                <span className="btn-primary-saas">Sign Up</span>
              </Link>
            </div>
            {/* Hamburger Menu Button */}
            <div className="mobile-menu-toggle">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="flex flex-col items-center gap-8 py-8">
            <Link href="/" passHref>
              <span className="nav-link-saas text-xl" onClick={() => setIsMobileMenuOpen(false)}>Home</span>
            </Link>
            <Link href="/dashboard" passHref>
              <span className="nav-link-saas text-xl" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</span>
            </Link>
            <div className="flex flex-col items-center gap-6 mt-6">
                <Link href="/signin" passHref>
                    <span className="btn-secondary-saas" onClick={() => setIsMobileMenuOpen(false)}>Sign In</span>
                </Link>
                <Link href="/signup" passHref>
                    <span className="btn-primary-saas" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</span>
                </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default HeaderSaaS;
