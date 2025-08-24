import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import ClientSlideshow from '@/components/ClientSlideshow'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ClientSlideshow />
      <Pricing />
      <Testimonials/>
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
