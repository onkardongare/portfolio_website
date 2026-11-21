'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
