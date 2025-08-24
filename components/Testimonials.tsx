'use client'

import { Star, Quote, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: 'Ponraj Noah',
      city: 'Chennai',
      rating: 5,
      text: 'Simply superb system which takes care of every person from IT Returns perspective. The process was incredibly smooth and I got my refund processed within days. Thank you for making tax filing so hassle-free!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Vikram Ramu Iyer',
      city: 'Pune',
      rating: 5,
      text: 'Really easy! Took me not more than 10 minutes to complete my entire tax filing. The interface is intuitive and the automatic calculations saved me hours of manual work. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Priya Sharma',
      city: 'Mumbai',
      rating: 5,
      text: 'As a first-time filer, I was worried about the process, but myITreturn made it incredibly simple. The guided wizard walked me through everything and I received my refund faster than expected.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Rajesh Kumar',
      city: 'Delhi',
      rating: 5,
      text: 'Outstanding service! The capital gains calculator automatically imported all my trading data and calculated everything perfectly. Saved me from hiring a CA and the cost was very reasonable.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      verified: true
    }
  ]

  const stats = {
    rating: 4.7,
    reviews: 22500,
    companies: 2000,
    satisfaction: 98
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-more-delayed"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our
            <span className="text-gradient ml-2">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust myITreturn for their tax filing needs
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Average Rating', value: `${stats.rating}`, icon: Star },
              { label: 'Happy Customers', value: `${stats.reviews.toLocaleString()}+`, icon: CheckCircle },
              { label: 'Companies Served', value: `${stats.companies.toLocaleString()}+`, icon: CheckCircle },
              { label: 'Satisfaction Rate', value: `${stats.satisfaction}%`, icon: CheckCircle }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index}
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="glass-effect rounded-2xl p-6">
                    <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/20 dark:text-blue-400/20" />
              
              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-8">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                    />
                    {testimonials[currentTestimonial].verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].city}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to join our satisfied customers?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Start your tax filing journey today and experience the difference.
            </p>
            <button className="btn-primary">
              Start Filing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
