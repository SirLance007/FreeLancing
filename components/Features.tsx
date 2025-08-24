'use client'

import { Upload, FileText, MessageSquare, Smartphone, Shield, Calculator, Users, AlertTriangle } from 'lucide-react'

const Features = () => {
  const filingMethods = [
    {
      icon: Upload,
      title: 'Quick Import from ITD',
      description: 'Fetch your tax data directly from the Government records and get a pre-filled form. Just review and file tax return.',
      buttonText: 'Start Now',
      color: 'primary'
    },
    {
      icon: FileText,
      title: 'Form-16 Upload',
      description: 'Upload Form-16 for automatic data extraction and swift processing.',
      buttonText: 'Start Now',
      color: 'secondary'
    },
    {
      icon: MessageSquare,
      title: 'Easy Q&A Filing',
      description: 'Simple, guided Q&A format that breaks down complex forms into easy, answerable questions.',
      buttonText: 'Start Now',
      color: 'success'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Filing',
      description: 'File your taxes conveniently on our user-friendly mobile app, designed for on-the-go filing.',
      buttonText: 'Download Now',
      color: 'primary'
    }
  ]

  const keyFeatures = [
    {
      icon: Shield,
      title: 'No Document Uploads Needed',
      description: 'No documentary proofs needs to be uploaded to file your income tax return. Just fill, file and smile.',
      buttonText: 'Start Now'
    },
    {
      icon: MessageSquare,
      title: 'Easy Filing Wizard',
      description: 'Answer easy questions to file your return. Our easy to use filing process is designed to guide you step-by-step, myITreturn.com simplifies complex tax forms into a straightforward, easy-to-understand process, saving you time and reducing errors.',
      buttonText: 'Start Now'
    },
    {
      icon: Calculator,
      title: 'Capital Gain from Shares / Mutual Funds in one click',
      description: 'Automatically imports transaction data from all major broking platforms and seamlessly calculates your capital gains and losses. Our systems ensure your capital gains are accurately reported, maximizing your potential deductions and minimizing your tax liability.',
      buttonText: 'Calculate Now'
    },
    {
      icon: Users,
      title: 'Need Help? Ask your Question',
      description: 'Our backend team and guides can help you answer all your tax related questions. You could also opt for assisted services.',
      buttonText: 'Ask Now',
      secondaryButton: 'Opt for Assisted Service'
    },
    {
      icon: AlertTriangle,
      title: 'Worried about Notices? We handle it for You',
      description: 'If you receive a tax notice, our team of professionals will handle the entire process, from response to resolution, ensuring peace of mind and compliance with tax regulations.',
      buttonText: 'Solve your Notice'
    },
    {
      icon: Users,
      title: 'Introducing our Community: For peer support and expert advice',
      description: 'You\'re never alone in your tax filing journey. Our platform connects you with a community of other users. Engage with fellow filers to exchange tips, seek advice, and navigate tax challenges together. Whether you\'re a first-time filer or a seasoned pro, our community has a place for everyone.',
      buttonText: 'Ask Community'
    }
  ]

  return (
    <section className="section-padding bg-white px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            4 easy ways to file your tax return
          </h2>
        </div>

        {/* Filing Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {filingMethods.map((method, index) => (
            <div key={index} className="card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className={`inline-flex p-3 sm:p-4 rounded-full mb-3 sm:mb-4 ${
                method.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                method.color === 'secondary' ? 'bg-secondary-100 text-secondary-600' :
                'bg-success-100 text-success-600'
              }`}>
                <method.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{method.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{method.description}</p>
              <button className={`w-full text-sm sm:text-base ${
                method.color === 'primary' ? 'btn-primary' :
                method.color === 'secondary' ? 'btn-secondary' :
                'btn-outline'
              }`}>
                {method.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="inline-flex p-3 rounded-full bg-primary-100 text-primary-600 flex-shrink-0 self-start sm:self-auto">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="btn-primary text-sm sm:text-base">
                      {feature.buttonText}
                    </button>
                    {feature.secondaryButton && (
                      <button className="btn-outline text-sm sm:text-base">
                        {feature.secondaryButton}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
