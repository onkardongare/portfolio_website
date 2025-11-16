import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
