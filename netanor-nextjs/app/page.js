import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Plans from '@/components/Plans'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
      <Features />
      <Footer />
    </main>
  )
}
