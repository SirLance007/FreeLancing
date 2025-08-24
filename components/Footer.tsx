'use client'

import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const footerLinks = {
    myITreturn: [
      'myITreturn Home',
      'Support',
      'Track Refund',
      'About Us',
      'Privacy Policy',
      'Terms of Use',
      'Refund Policy',
      'Pricing',
      'Team',
      'Branding',
      'Refer & earn',
      'Share with friends'
    ],
    importantTools: [
      'Capital Gain Calculator',
      'Shares & Securities Calculator',
      'Land & Building Calculator',
      'Crypto Tax Calculator',
      'Advance Tax Estimator',
      'Tax Calculator 2025-26',
      'Tax Calculator 2024-25',
      'Generate Form 12BB',
      'Generate Rent Receipt',
      'Check Refund Status',
      'Find IFSC Code',
      'HRA Calculator',
      'EMI Calculator',
      'BMI Calculator'
    ],
    corporate: [
      'Form-16 Software',
      'Digital Signature',
      'TDS Software',
      'TDS Outsourcing',
      'STACOS',
      'Lexlegis',
      'Teamnest',
      'Partner with myITreturn'
    ],
    otherLinks: [
      'Assisted Service',
      'Notice Assistance',
      'Notice Section 139(9)',
      'Notice Section 143(1)',
      'Notice Section 133(6)',
      'Notice Section 245',
      'Last date to file Income tax return',
      'Tax Planning'
    ]
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Small Accounting Solutions Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">Small Accounting Solutions</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Professional Tax & Accounting</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Professional tax filing and accounting services. We specialize in income tax returns, 
              business accounting, and financial consulting. Trust us with your tax filing needs for 
              maximum refunds and peace of mind.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              We are committed to providing accurate, timely, and professional tax services to individuals 
              and businesses. Your financial success is our priority.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <p>Registered tax consultant and authorized e-filing intermediary.</p>
              <p>Copyright © 2024 Small Accounting Solutions. All rights reserved.</p>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.myITreturn.slice(0, 8).map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.importantTools.slice(0, 8).map((tool, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {tool}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Corporate</h4>
            <ul className="space-y-2">
              {footerLinks.corporate.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.otherLinks.slice(0, 8).map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400">Contact Information</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Address:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                      27A Ganesh Colony, Jagatpura, Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Phone:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">+91 9664069669</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Email:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">smallaccountingsolution@yahoo.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Business Hours:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-600 dark:text-blue-400">About Small Accounting Solutions</h4>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                We are a professional accounting and tax consulting firm based in Jaipur, Rajasthan. 
                Our team of experienced professionals provides comprehensive tax filing services, 
                business accounting, and financial consulting to individuals and businesses.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Authorized e-filing intermediary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Registered tax consultant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">ISO certified processes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              © 2024 Small Accounting Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
