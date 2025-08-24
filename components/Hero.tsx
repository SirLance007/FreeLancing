'use client'

import { Star, ArrowRight, Play, CheckCircle, Zap, Shield, Clock } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const textRef = useRef<HTMLSpanElement>(null)
    const [textWidth, setTextWidth] = useState(0)

    const texts = [
        "Maximum refund guaranteed",
        "Authorised Tax-preparer",
        "Easy filing wizard",
        "Value for money"
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

        const element = document.getElementById('hero')
        if (element) {
            observer.observe(element)
        }

        return () => observer.disconnect()
    }, [])

    // Mouse movement effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        if (textRef.current) {
            setTextWidth(textRef.current.offsetWidth)
        }
    }, [currentTextIndex, currentCharIndex])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentCharIndex < texts[currentTextIndex].length) {
                    setCurrentCharIndex(currentCharIndex + 1)
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (currentCharIndex > 0) {
                    setCurrentCharIndex(currentCharIndex - 1)
                } else {
                    setIsDeleting(false)
                    setCurrentTextIndex((currentTextIndex + 1) % texts.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [currentCharIndex, currentTextIndex, isDeleting, texts])

    const features = [
        { icon: Zap, text: "File in 10 minutes", color: "from-yellow-400 to-orange-500" },
        { icon: Shield, text: "100% Secure", color: "from-green-400 to-emerald-500" },
        { icon: Clock, text: "24/7 Support", color: "from-blue-400 to-cyan-500" }
    ]

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-20 dark:opacity-10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large floating orbs */}
                <div 
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                    }}
                ></div>
                <div 
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-float-delayed"
                    style={{
                        transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
                    }}
                ></div>
                <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float-more-delayed"
                    style={{
                        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
                    }}
                ></div>

                {/* Additional floating elements */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-green-400/15 to-teal-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-float-more-delayed" style={{ animationDelay: '5s' }}></div>
            </div>

            {/* Geometric Shapes */}
            <div className="absolute inset-0">
                {/* Triangles */}
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-400/20 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-purple-400/20 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 border-2 border-green-400/20 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>

                {/* Squares */}
                <div className="absolute top-1/3 left-20 w-10 h-10 border-2 border-cyan-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-1/3 right-20 w-6 h-6 border-2 border-pink-400/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-300/40 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Moving Lines */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shimmer"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-shimmer" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400/30 to-transparent animate-shimmer" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 text-blue-400/20 animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <CheckCircle className="w-8 h-8" />
                </div>
                <div className="absolute top-3/4 right-1/4 text-purple-400/20 animate-bounce" style={{ animationDelay: '1.5s' }}>
                    <Star className="w-6 h-6" />
                </div>
                <div className="absolute bottom-1/4 left-1/3 text-green-400/20 animate-bounce" style={{ animationDelay: '2.5s' }}>
                    <Zap className="w-7 h-7" />
                </div>
                <div className="absolute top-1/2 right-1/4 text-pink-400/20 animate-bounce" style={{ animationDelay: '3.5s' }}>
                    <Shield className="w-5 h-5" />
                </div>
            </div>

            {/* Wave Effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 dark:from-gray-900/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-500/5 dark:from-blue-400/5 to-transparent"></div>

            <div className="container-custom relative z-30">
                <div className="text-center max-w-6xl mx-auto">
                    <div className="space-y-12">
                        {/* Main Content */}
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight relative z-20 mt-20">
                                Fill, File and
                                <span className="text-gradient ml-4 animate-pulse">Smile</span>
                            </h1>

                            {/* Animated Subheading */}
                            <div className="h-16 flex items-center justify-center">
                                <div className="text-center">
                                    <span
                                        ref={textRef}
                                        className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400"
                                    >
                                        {texts[currentTextIndex].substring(0, currentCharIndex)}
                                        <span className="inline-block w-1 h-8 bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse"></span>
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Experience the easiest way to file your income tax returns. 
                                Get maximum refunds with our AI-powered platform.
                            </p>
                        </div>

                        {/* Features */}
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <div 
                                        key={index}
                                        className="glass-effect rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 hover:animate-glow"
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{feature.text}</p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 animate-glow">
                                Start Filing Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                            <button className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* Rating Section */}
                        <div className={`flex flex-col items-center justify-center space-y-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                            <div className='flex flex-row space-x-2 text-lg'>
                                <div className="font-bold text-gray-900 dark:text-white">4.7</div>
                                <div className="text-gray-600 dark:text-gray-400">| 22,500+ Reviews</div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {[
                                { number: "2M+", label: "Users" },
                                { number: "₹500Cr+", label: "Refunds" },
                                { number: "99.9%", label: "Success Rate" },
                                { number: "24/7", label: "Support" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{stat.number}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
