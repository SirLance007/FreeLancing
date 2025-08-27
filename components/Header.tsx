'use client'

import { useState, useEffect } from 'react'
import { Menu, X, User, HelpCircle, CheckCircle, ChevronDown, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import { scrollToSection } from './utils/smoothScroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#testimonials' },
    { name: 'Contact', href: '#faq' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Enhanced Logo and Tagline */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative group">
                {/* Simple Logo Container */}
                <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                  <Image
                    src="/image.png"
                    alt="Small Accounting Solutions Logo"
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
              </div>
              
              {/* Enhanced Company Info */}
              <div className="space-y-0 sm:space-y-1">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent tracking-tight">
                  Small Accounting Solutions
                </h1>
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide">
                    Professional Tax & Accounting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 sm:space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="relative group text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 delay-75"></span>
              </button>
            ))}
          </nav>

          {/* Enhanced Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Enhanced Get Started Button */}
            <button className="hidden sm:flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden text-sm sm:text-base">
              <span className="relative z-10">Get Started</span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="space-y-2 sm:space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href.replace('#', ''))
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
