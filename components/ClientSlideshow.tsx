'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ClientSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const clients = [
    {
      name: 'Wipro',
      logo: 'data:image/png;base64,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',
      tagline: 'Re-Engineered Tyres',
      industry: 'Automotive',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Tech Mahindra',
      logo: 'data:image/png;base64,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',
      tagline: 'PLAN YOUR FUTURE WITH US',
      industry: 'Astrology',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IBM',
      logo: 'data:image/png;base64,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',
      tagline: 'Fresh & Organic',
      industry: 'Retail',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Axis Bank',
      logo: 'data:image/png;base64,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',
      tagline: 'Premium Tea Collection',
      industry: 'Beverages',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Cipla',
      logo: 'data:image/png;base64,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',
      tagline: 'Taste the Difference',
      industry: 'Food',
      color: 'from-pink-500 to-red-500'
    },
    {
      name: 'Cognizant',
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDRAPEBAQEA4PEBAPDw8QExAPERAPFRIWFxUXFRUYHyggGBolGxYXIT0hJSkrLi4uFx8/ODMsNyktMCsBCgoKDg0OFxAQGy0dICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAwYHAgQFAQj/xAA7EAACAgACBwMJCAICAwAAAAAAAQIDBBEFBiExQVFhE3GRBxIUIiNCUoHRFSQyVGKTscGh4UNysvDx/8QAGgEBAQADAQEAAAAAAAAAAAAAAAIBBAUDBv/EACoRAQEAAgICAgEDBAIDAAAAAAABAgMREgQxIVETIkFhQnGBsUORBSMy/9oADAMBAAIRAxEAPwDeIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcZTS3tLveQnz6HztY/FHxRnrfpjmHax+KPih1v0cw7WPxLxQ4v0cw7WPxLxQ4v0cw7WPNeKHF+jmHaR5rxQ4v0cw7SPNeKHF+jtDtI814ocX6OY+qae5oxeTmOQZAAAAAAAAAAAAAAAAAAAA4zmopttJJNtvYklvbBy0PrzrQ8fi8621hqc40LavO27ZtdcvDI7Hjafx48/u527Zcr8PJw+Kz2S2deBtzKfu8u1+3fg/AviM837XgRZGOb9qxMWRjm/a0CLjDmrQJ4jHKsCbGOVok8HNd3RuMlRbGyO+O9cGuKZ554TKcKwzuNlbKwWKhdXGyG2Mln1XNPqcvLHreK6uOcynMXMKAAAAAAAAAAAAAAAAAD4BrLys61eZH7Ppl680niZL3YPdX3ve+mXM3/AAtHP/srV37OP0xqyB0q0loE1Ndqi1x3buRjtYnnh6VF6l0fIuZ8qmXLtRKUtAisLQJrCsCawtEkVgSMh1W0p2VnZzfs7Hsz3RnwfczV8jX2nMbHj7et4rN0aLpPoAAAAAAAAAAAAAAAAwMe111lho7Byt2O6ecMPW/fsa3v9K3v/Z7aNN258I2Z9Y/Pl187bJWWSc7LJOc5S2uUm822dyYzGThz8rz8ucCa86tAmpq0CUVeJKa7lGIa37V/kzM7GZs4ejTNS3M9O0r0mUrsQMUVgTWFokisCRWJNYZxqzpPta+zk/aVrj70OD/o5+7X1vMdLxtvadb7e2jxbL6AAAAAAAAAAAAAABHF4iFVc7bJKFdcXOcnujFLNszJbeIW8PzrrlrJPSWMlc81TH1MPW/drT3v9T3v/R3fH0TVhJ+7R2Z9ry8eB6141eBFRVoE1NWgSirRJqavEmoq1baea2Mx69Mc2enfoxXCXj9Sps+3pjs+3oea08mmnknk9mx7UVzL6evH7qxMMKwJFYk1Lt4LEyqsjZH8UX4rijzzxmU4qsM7heY2DgcVG6uNkd0uHJ8UznZY9bw6+GcynMdgwsAAAAAAAAAAAAD4wNOeWDW7tJvRtEvZ1yTxUlulYnmq+5PJvrlyOr4Hj8T8l/w1t2f9Ma0gdFr1eBFRV4EVFWgTU1aBKKtEmpq8SaiqxJTWVaj6A9Lu7Sa+70vOX658I93F/wCzW3bOvxGz4vj98ub6bK0lomnERysis0soyWyUe5/0auGzLC8x1s9eOU+WF6W1auozlH2tXxJesl+qP9o3tfkY5/F+K0dujLH59x5MD3aysSaLQJS9rV/SPY2ebJ+zm9v6ZcGeG7X2nLZ8fb0vFZmmaTqPoAAAAAAAAAAAAYf5SdbVo3B5QaeLvzhRH4dnrWPov5aNnxdF25fxEZ5dY/PXnNtybblJuUm9rcm822+Z3+GnVoEVNXgTUVeBFRVoE1NWgSirRJqavEmor0dD6OsxV8Ka160ntfCMVvk+iPPPKYzlnXrueUxjdWidH14aiFNayjBZZ8ZS4yfVs5mWXa813deua8ZjHdMLAPD0rq5VdnKCVdnOK9VvrH+z2178sf7NfZ4+OX92J47RtuHllZHJcJLbGXczcx2Y5+nP2assP/pGBTzViTWGW6uaR8+HZTfrwXqv4o/VGnuw4vMdLxt3ada9tHi230AAAAAAAAAA6eltJVYXD2Yi6ShVVFznJ8lwXNvdl1KwwueUxjFvE5fmTWbT9ukcZZirc15zyqr4VVL8MV/b4ts+j06Zqw6xq55c10IF151eBNRV4EVNXgRUVaBNTVoEoq0SamrwWe7fwRNTxy3DqPq76HR59i+8XJOfOEd6h9evcc3ds734dbxtPTHm+2TpHi2gAAAnbVGcXGUVKL3prNMzLx6YslnFY5pLVnfKj9tv/wAX9TYw3/tk0tvi8/ODH51yhLzZJxkt6ayZsyyz4aWWNx+KvhrpQmpxeUovNEZTn4pjlcb2jN8Bio21qa471ylxRpZY9bw6+rOZ48x2SXoAAAAAAAAfGBoPywa5emYn0KiWeFw0vaSTzV2IX8xju72+SO54HjdMe+Xu/wCnhsy5a/gdCvGrwPOpq8CairwIqavAioq0CamrQJRVok1FZ/5N9XO0n6ZbH2cHlQnunNb5dy/nuNLyNvH6Y3fF08/rrZ5pOk+gAAAAB8yA62NwFdyynHPlJbJLuZWOdx9PPPVjn8VjWP0JZVnKPtIc1+JLqjZx3TL2523xssfmfMNC47sbNv4JbJdOTGzDtOYx4+3pfn0y6LzNR1n0AAAAAAADXfle109Aw3o1EksbiotJp7aadqlZ0b2pdc3wN7wfG/Ll2y9RGeXEfn6B9BWvV4MmprsQPOpq8CairwIqKvAmpq0CKmrQJRXvaqaCnj8TGpZquOUrpr3YZ8Or3f8Aw8N2yYYvTTr/ACZcN5YXDxqrjXBKMIRUYxW5RW45VvPzXXkknEVDIAAAAAAAB8yDHDzsfoeu31l6k/iW596PTHZY8NvjY5/Pqmi3ZX7G1bV+Ce9Sjyz5oxnxfmGntj+nJ6RDYAAAAAAAYN5StV1iavSq4J4imPrpLOVlK25dXHNvxOh4Hk/jy6Zer/t47sOZzGqYVx5LwR3a0rarGuPwrwRKbarGuPJeCIrztqsa48l4IlFtUjCPJeCJqLarGEeS8ETU21SMFyXgiKi2qKC5LwRKLa9rVrSrwl/nf8U8o2xXw8+9Gvv1d8f7PbxvIurP+K2lVYpRUovOLSaa3NM5XHD6CWWcxzDIAAAAAAAB8zA8LWDWnDYNebJ9pdwqhk5L/s90UXjruTW3eThr/lHVa3E4r73iPUhLNYaiOyMY7nN/E3uTfDPmZzkx+Ix49zz/AF5ev2jJDzbQAAAAAAD40YGoNf8AVz0S/tq45Ye9t5LdXZvce5718+R3vB8n8mPXL3Glv19bzGLxN+taqxPOoqsSXnVIkoqqJqapEioqiJRVImKisz1K01k/RbHse2lvg+MfoaHk6v6o6ngeV/x5M1RpOu+gAAAAAA6Wk9J0Yat2XWRhHhntcnyjFbW+4zMbfSM9mOE5yrXOsGvl1+deGzpq3Of/ACyXf7vy29TYx0yfNcvd5uWXxj6edqjoSWOxOUs+xh690ue3ZHPm/wCMytmXWPDxtN25/PpuGutRSSSUUkkluSS2JGo7snDmGQAAAAAAADp6W0fXiaJ0WLOE1k+afBrqntL17LrymUTljMpxWkNLaNswmInRYvWg9kuE48JLo0fR6duOzHtHNzx63h14lV5VWJLzqkSUVVE1NUiRUVREoqkTFRVa5NNNNpp5prY0yLJfaebj8xsvVnS6xNPrZdrBJWLnykujOXu19K+h8PyZtw/l7J5NwAAAOFlkYxcpNRitrbaSS6se2LeJzWDaxeUKuvOvCJWz3O559lH/AK/H/Hee+Gm/u0d3mzH4w+a15jcdbiLHZdZKyb4y4dEtyXRGzMZj6czPPLO82mEw87bI11xcpzajGK4tmLePmpwxuV4ntuvVzQ8MHh40x2y/FZP47Hvfdw+RpZZdry72jTNWMxj1CXsAAAAAAAAAPjAxfXrV30yjtK194pTcP1x4w/tde82/E8j8WXF9V4btfactTJHd55jm1SJLzqkSUVVE1NUiRUVREoqkTFRVIk1Fd/ROPlh7o2x4bJR4SjxTPHZh3nD0077qzmUbPweJjbXGyDzjJZr/AH1OZcbjeK+m17JsxmU/dcw9ADHNY9cMLgk4t9rfwpg1mv8Au/d/noemGq5Nfb5OGv8Au1fp7WbE46XtJebVnnGmGaguWfxPq/8ABt4a8cXL3b89n78PIRbXc0YY9tneTnV7s6/TLV7SxZUp+7W/e73/AB3mrt2c/EdXw/Hknes4R4Og+gAAAAAAAAAAD4wNZeULV7sbPS6o+ytl7VLdCx8e6T/z3nX8LyeZ0y/w0PJ1cXtGHxN5pVSJh51VE1NUiRUVREoqkTFRVIkVFUiTXnWSapaX7Gzspv2Vj2N+5Pn3M1d+vmcx0f8Ax/lfjy6Zer6ZbpbTGHwlbsvsjCPBb5SfKK3tmpjhcviO7lsxxnNrWGsflBvxHnV4ZPD0vZ52ftprvX4Pl4m3r0SfNc7d5eWXxj8RhyPdpWqRMMOSMMMl1I0B6biM5r7vS1KzlJ8IfPj07zx259Y2vF0/ky+fTccI5LJbkabsxyDIAAAAAAAAAAAAEMZhoXVTqsipQnFxknxTM45XG8xjLGZTitNae0RPB4mVMtsfxVz+OD3Pv4Pqjv6N35MJf+3I3a7hlw6MT0a9VRNTVIkVFURKKpExUVSJFedUzSTbeSW9vcTU8W+nk47Tqj6tXrP43+Fd3Mxw98PH+3jYrGW3T7S2ydk8kvOm3JpLclyXQmYyem5crfiuCMpURhLnEww7Wj8HZfdCmtedZZJRiuHVvolt+ROWUk5rOGFyskbx0DoqvB4aFEPd2ylxnN75P/3gjQyy7Xl3tWqa8eseiS9AAAAAAAAAAAAAABgeFrZoNY3DuKSV1ecqZdeMX0f0Pfx911Z/w8N+r8mP8tSODi3GSalFtST2NNPamdyXmcuRlOLY5oxXnVIkVFURKKpEmorq43StdOzPzp/CuHe+BNVjpuXt4GM0hZc/WeUeEFsivqS2MdcxQQU5owOaMMKIwlyRhj+W1/Jzq72FPpVsfbXL1E99dT3fN7+7LqaW7Pm8Ot4mjrO1Zqjxbr6AAAAAAAAAAAAAAAA+ZAYF5QNAZP0ytdL0vBT/AKfyOh4W/j9GX+HP8vT/AFRhCOlXNqkSKiuOIxUKo5zkkuC4vuRNTMbl6eHjtNTn6sPUhz95/PgRXvjqk9vORh6OaJYUQYc0YYc0YYURhNZZqBq76XiO1sX3ehpyz3WWb4w7uL+XM8N2zrOG14mnvl2vqNxJGk7EfQAAAAAAAAAAAAAAAAABwtrUouMknGSaae1NPemJeLzGLJZw1HrRoj0K9pv2Ms51Tfw8U3zX0Oz4+6bMP5cbyNNwy/hiWN09FZxqyb+N7l3Lietryx1/bx7LnOTlKXnN8WyHr69Ca5mKw5prmYrCkWiWK5poJ5c0zDHLmmYYd/ROAsxV8KK1nOx5dIrjJ9EtpGeXWc1WGHfKSN7aF0XXhMPXRX+GEcm+M5e9J9W9pz8su15dzXhMMesd8lYAAAAAAAAAAAAAAAAAAAEMThK7UlZXCxLalOKmk+5iWz0xcZfaH2Phfy2H/ar+hXa/bHWfR9j4X8vR+1X9B2v2dI+/ZGF/L0ftV/Qdsvs6z6PsnC/l6P2q/oY7ZfZ1n0fZOG/L0ftV/QdsjrPo+ycN+Xo/br+g7ZHTH6ffsrDfl6P26/oO2R0x+j7Kw35ej9uH0HN+zpj9OdOBprfnQqrhLLLOEIxeXekLaTGT1HZRhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z',
      tagline: 'Innovation in Three',
      industry: 'Technology',
      color: 'from-blue-500 to-cyan-500'
    }
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

    const element = document.getElementById('client-slideshow')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [clients.length])

  return (
    <section id="client-slideshow" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-blue-200/20 dark:border-blue-800/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 dark:text-green-400 font-medium">Trusted Partners</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ml-4">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leading companies trust us with their financial success
          </p>
        </div>

        {/* 3D Carousel */}
        <div className={`relative h-96 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative w-full h-full flex items-center justify-center">
            {clients.map((client, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + clients.length) % clients.length
              const isNext = index === (currentIndex + 1) % clients.length
              
              let transform = ''
              let opacity = 0
              let zIndex = 0

              if (isActive) {
                transform = 'translateX(0) scale(1)'
                opacity = 1
                zIndex = 20
              } else if (isPrev) {
                transform = 'translateX(-80%) scale(0.8)'
                opacity = 0.7
                zIndex = 10
              } else if (isNext) {
                transform = 'translateX(80%) scale(0.8)'
                opacity = 0.7
                zIndex = 10
              }

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className={`relative w-64 h-80 bg-gradient-to-br ${client.color} rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 ${isActive ? 'ring-4 ring-blue-500/20 dark:ring-blue-400/20' : ''}`}>
                    {/* Logo */}
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                        unoptimized
                      />
                    </div>

                    {/* Content */}
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                      <p className="text-white/80 text-sm mb-4">{client.tagline}</p>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                        <span className="text-xs font-medium">{client.industry}</span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % clients.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: "100+", label: "Happy Clients", icon: "👥" },
            { number: "99%", label: "Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Support", icon: "🛟" },
            { number: "5+", label: "Years", icon: "📈" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm rounded-3xl p-12 border border-blue-200/20 dark:border-blue-800/20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Experience the same level of excellence that our clients trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Today
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold py-4 px-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientSlideshow
