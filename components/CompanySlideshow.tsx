'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const CompanySlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const companies = [
    { name: 'Google', logo: '/image.png', industry: 'Technology' },
    { name: 'Amazon', logo: '/image.png', industry: 'E-commerce' },
    { name: 'Microsoft', logo: '/image.png', industry: 'Technology' },
    { name: 'Apple', logo: '/image.png', industry: 'Technology' },
    { name: 'Meta', logo: '/image.png', industry: 'Social Media' },
    { name: 'Netflix', logo: '/image.png', industry: 'Entertainment' },
    { name: 'Tesla', logo: '/image.png', industry: 'Automotive' },
    { name: 'Adobe', logo: '/image.png', industry: 'Software' },
    { name: 'Salesforce', logo: '/image.png', industry: 'CRM' },
    { name: 'Oracle', logo: '/image.png', industry: 'Database' },
    { name: 'IBM', logo: '/image.png', industry: 'Technology' },
    { name: 'Intel', logo: '/image.png', industry: 'Semiconductor' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('company-slideshow')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [companies.length])

  return (
    <section id="company-slideshow" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Trusted by
            <span className="text-gradient ml-2">Global Leaders</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join industry leaders from technology, e-commerce, and entertainment who trust our platform
          </p>
        </div>

        {/* Simple Slideshow */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Company Card */}
            <div className="glass-effect rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
              {/* Company Logo */}
              <div className="mb-6 sm:mb-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                  <Image
                    src={companies[currentIndex].logo}
                    alt={companies[currentIndex].name}
                    fill
                    className="object-contain transition-all duration-500"
                  />
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {companies[currentIndex].name}
                </h3>
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  {companies[currentIndex].industry}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-6 sm:mb-8">
                "We trust Small Accounting Solutions for all our tax filing needs. Their professional service and attention to detail is unmatched."
              </blockquote>

              {/* Company Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">$2B+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length)}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % companies.length)}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: "12+", label: "Industries" },
            { number: "500+", label: "Companies" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="glass-effect rounded-2xl p-4 sm:p-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Ready to join these companies?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Start your journey with the most trusted tax filing platform.
            </p>
            <button className="btn-primary text-sm sm:text-base">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanySlideshow
