'use client'

import { Check, Download, Star, Zap, Shield, Crown } from 'lucide-react'
import { useState, useEffect } from 'react'

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('pricing')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const pricingPlans = [
    {
      name: 'All Income Plan',
      price: '₹199',
      subtitle: 'Simple & Complex Returns',
      features: ['Salary, Interest, Pension', 'Capital Gains', 'Foreign Income', 'Everything else'],
      buttonText: 'Start Now',
      note: 'Pay only after seeing your refund',
      caAssisted: 'CA Assisted Filing starts at ₹499/- only',
      icon: Zap,
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Assisted Filing',
      price: '₹499',
      subtitle: 'For Complete Satisfaction',
      features: ['Salary, Interest, Pension', 'Capital Gains', 'Foreign Income', 'Everything else'],
      buttonText: 'Start Now',
      note: 'Notice Protection Included',
      caAssisted: 'Notice Assistance starts at ₹1,499/- only',
      icon: Shield,
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Notice Assistance',
      price: '₹1,499',
      subtitle: 'For Complete Satisfaction',
      features: ['Defective Return', 'Demand Determined', 'Refund Adjusted', 'Calling of Information'],
      buttonText: 'Start Now',
      note: 'Follow-up till Resolution',
      caAssisted: 'CA Assisted Filing starts at ₹499/- only',
      icon: Crown,
      popular: false,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float-more-delayed"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Choose Your
            <span className="text-gradient ml-2">Perfect Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get the best value for your money with our transparent pricing. No hidden charges, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >

                {/* Card */}
                <div className={`
                  relative h-full p-6 sm:p-8 rounded-2xl transition-all duration-300 group
                  ${plan.popular 
                    ? 'bg-white dark:bg-gray-800 shadow-2xl scale-105 border-2 border-purple-200 dark:border-purple-700' 
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700'
                  }
                  ${hoveredCard === index ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'}
                `}>
                  {/* Gradient overlay on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300
                  `}></div>

                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className={`
                      inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} text-white mb-3 sm:mb-4
                      transform group-hover:scale-110 transition-transform duration-300
                    `}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{plan.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.price}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">One-time payment</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className={`
                    w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-white transition-all duration-300 transform group-hover:scale-105 text-sm sm:text-base
                    bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-purple-500/25
                    ${plan.buttonText === 'Download Now' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}
                  `}>
                    {plan.buttonText === 'Download Now' && <Download className="w-4 h-4 mr-2 inline" />}
                    {plan.buttonText}
                  </button>

                  {/* Notes */}
                  <div className="mt-4 sm:mt-6 text-center">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">{plan.note}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{plan.caAssisted}</p>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Our tax experts are here to help you choose the right plan for your needs.
            </p>
            <button className="btn-outline text-sm sm:text-base">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
