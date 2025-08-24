'use client'

import { MessageCircle } from 'lucide-react'

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210' // Replace with actual WhatsApp number
    const message = 'Hi, I need help with tax filing on myITreturn'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}

export default WhatsAppFloat
