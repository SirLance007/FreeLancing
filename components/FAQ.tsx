'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, FileText, Calculator, Shield, Clock } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
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

    const element = document.getElementById('faq')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: 0 },
    { id: 'filing', name: 'Filing Process', icon: FileText, count: 0 },
    { id: 'verification', name: 'Verification', icon: Shield, count: 0 },
    { id: 'refunds', name: 'Refunds & Status', icon: Calculator, count: 0 },
    { id: 'notices', name: 'Notices', icon: MessageCircle, count: 0 },
    { id: 'timeline', name: 'Timeline', icon: Clock, count: 0 }
  ]

  const faqs = [
    {
      question: 'What are the main stages in individual income-tax return preparation?',
      answer: `The main stages of individual Income tax return are:

1. **File Income Tax** (Last date 31st July) on myITreturn.com or incometax.gov.in
2. **eVerify your return** - Complete the verification process
3. **Processing** - ITD will check/process your return and issue refund or notice for any mismatches

Our platform guides you through each step with clear instructions and automated checks.`,
      category: 'filing'
    },
    {
      question: 'How to check if I have filed my Income tax return?',
      answer: `**If you filed through myITreturn:**
Simply login to your myITreturn web or app account and check the status on the Filer Dashboard page.

**If you filed elsewhere:**
1. Login to Income-tax portal
2. Select e-File › Income Tax Return › View Filed Returns
3. You'll see the list of years when you filed your returns

We provide real-time status updates and notifications for all your filings.`,
      category: 'filing'
    },
    {
      question: 'What is e-Verification of ITR and why is it important?',
      answer: `e-Verification is a crucial step that confirms to the Income Tax Department that you have reviewed and approved your return. It's like a digital signature.

**Why it's important:**
- Without verification, your return is considered incomplete
- It prevents processing delays and potential penalties
- Ensures faster refund processing

**How to verify:**
- Use OTP sent to your registered mobile/email
- Complete within 120 days of filing
- Can be done through our platform or ITD portal

We make verification seamless with automated reminders and one-click verification.`,
      category: 'verification'
    },
    {
      question: 'How to check the status of my refund?',
      answer: `**Track your refund status:**

1. **On myITreturn:** Login to your dashboard for real-time updates
2. **ITD Portal:** Visit the official refund status page
3. **SMS/Email:** Receive automatic notifications

**Refund timeline:**
- Usually processed within 2-4 weeks after verification
- Faster for e-verified returns
- Track progress through our dashboard

We provide detailed tracking and notify you at every stage of the refund process.`,
      category: 'refunds'
    },
    {
      question: 'What should I do if I receive a notice from ITD?',
      answer: `**Don't panic!** Notices are common and usually routine.

**Immediate steps:**
1. **Read carefully** - Understand what's being asked
2. **Check deadline** - Respond within the given timeframe
3. **Gather documents** - Prepare required information
4. **Seek help** - Use our Notice Assistance service

**Types of notices:**
- Section 139(9): Defective return
- Section 142(1): Request for documents
- Section 143(2): Assessment notice
- Section 148: Income escaped assessment

Our experts can help you understand and respond to any notice professionally.`,
      category: 'notices'
    },
    {
      question: 'How much time does it take to file my IT return?',
      answer: `**With myITreturn:**
- **Average time:** Less than 20 minutes
- **First-time users:** 30-45 minutes
- **Regular users:** 10-15 minutes

**What speeds up the process:**
- Smart form auto-fill
- Document upload automation
- Pre-filled data from previous years
- Intelligent validation checks

**Time-saving features:**
- Import Form 16 automatically
- Auto-calculate deductions
- Real-time validation
- One-click submission

We've optimized every step to make tax filing as quick and painless as possible.`,
      category: 'timeline'
    },
    {
      question: 'What documents do I need for filing ITR?',
      answer: `**Essential documents:**
- PAN Card
- Aadhaar Card
- Form 16 (for salaried employees)
- Bank statements
- Investment proofs

**Additional documents (if applicable):**
- Property documents
- Business income details
- Foreign income details
- Capital gains statements

**Smart document handling:**
- Upload once, use for multiple years
- Auto-extract information
- Secure cloud storage
- Easy retrieval system

We guide you through exactly what you need based on your income sources.`,
      category: 'filing'
    },
    {
      question: 'Can I file ITR using a mobile app?',
      answer: `**Yes!** Our mobile app is available in 9 Indian languages and offers full functionality.

**App features:**
- Complete tax filing process
- Document upload and management
- Real-time status tracking
- Push notifications
- Offline form preparation

**Available on:**
- iOS App Store
- Google Play Store
- Direct download from our website

**Award-winning app:**
- Winner of Aatmanirbhar Bharat App Innovation Challenge
- Government of India recognition
- Trusted by over 1 million users

Download our app for a seamless mobile tax filing experience.`,
      category: 'filing'
    },
    {
      question: 'What if I miss the filing deadline?',
      answer: `**Don't worry!** You can still file, but there are consequences:

**Late filing fees:**
- ₹1,000 if filed before December 31
- ₹5,000 if filed after December 31
- ₹10,000 if income exceeds ₹5 lakhs

**How to file late:**
1. **Online:** Use our platform (recommended)
2. **Offline:** Submit to your local IT office
3. **Request condonation:** For genuine reasons

**Our assistance:**
- Late filing guidance
- Fee calculation
- Documentation help
- Expert consultation

It's better to file late than never - we'll help you through the process.`,
      category: 'timeline'
    },
    {
      question: 'How secure is my data on myITreturn?',
      answer: `**Bank-level security** protects your information:

**Security measures:**
- 256-bit SSL encryption
- Two-factor authentication
- Regular security audits
- GDPR compliance
- ISO 27001 certified

**Data protection:**
- Never shared with third parties
- Stored on secure servers
- Automatic backups
- Access logs maintained

**Privacy commitment:**
- Your data belongs to you
- Complete control over information
- Easy data export/deletion
- Transparent privacy policy

We take your privacy and security as seriously as banks do.`,
      category: 'verification'
    }
  ]

  // Calculate category counts
  categories.forEach(cat => {
    cat.count = faqs.filter(faq => faq.category === cat.id || cat.id === 'all').length
  })

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-float-more-delayed"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Frequently Asked
            <span className="text-gradient ml-2">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about tax filing, verification, and our services
          </p>
        </div>

        {/* Search and Categories */}
        <div className={`max-w-4xl mx-auto mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Search Bar */}
          <div className="relative mb-6 sm:mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 text-xs sm:text-sm ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  <span className="ml-1 text-xs opacity-75">({category.count})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQ Items */}
        <div className={`max-w-4xl mx-auto space-y-3 sm:space-y-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-effect rounded-2xl overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
              >
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-all duration-200" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="pt-3 sm:pt-4 text-gray-700 dark:text-gray-300 leading-relaxed prose prose-gray dark:prose-invert max-w-none">
                    <div className="whitespace-pre-line text-sm sm:text-base">{faq.answer}</div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* No results message */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No questions found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Our tax experts are here to help you with any specific questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="btn-primary text-sm sm:text-base">
                Contact Support
              </button>
              <button className="btn-outline text-sm sm:text-base">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
