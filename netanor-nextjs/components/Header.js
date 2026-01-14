'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark-900/95 backdrop-blur-md border-b border-dark-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-baby-blue-400 to-baby-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Netanor</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#csomagok" className="nav-link">
              Csomagok
            </Link>
            <Link href="#szolgaltatasok" className="nav-link">
              Szolgáltatások
            </Link>
            <Link href="#kapcsolat" className="nav-link">
              Kapcsolat
            </Link>
            <button className="btn-primary">
              Bejelentkezés
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-baby-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-dark-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#csomagok"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Csomagok
              </Link>
              <Link
                href="#szolgaltatasok"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Szolgáltatások
              </Link>
              <Link
                href="#kapcsolat"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Kapcsolat
              </Link>
              <button className="btn-primary w-full">
                Bejelentkezés
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
