import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Onkar Dongare"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance">
            Onkar Dongare
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Full Stack Developer, App Developer & AI Integrator
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I build real-world, impactful technology solutions. Specializing in mobile development, backend systems, AI integration, and mapping technologies with a focus on scalability and clean architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a 
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition font-medium"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition font-medium"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <a href="https://github.com/onkardongare" className="text-muted-foreground hover:text-foreground transition p-2">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/onkardongare" className="text-muted-foreground hover:text-foreground transition p-2">
            <Linkedin size={24} />
          </a>
          <a href="mailto:dongareonkar2@gmail.com" className="text-muted-foreground hover:text-foreground transition p-2">
            <Mail size={24} />
          </a>
          <a href="https://x.com/dongareonkar_2" className="text-muted-foreground hover:text-foreground transition p-2">
            <Twitter size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
