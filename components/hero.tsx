'use client'

import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { ProfileTransition } from '@/components/profile-transition'
import { ParticleBackground } from '@/components/particle-background'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Connected dots particle background - confined to Hero area */}
      <ParticleBackground />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <ProfileTransition
              primaryImage="/profile.jpg"
              secondaryImage="/profile1.jpg"
              alt="Onkar Dongare"
              interval={3200}
              duration={650}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl sm:rounded-[24px] border-2 border-primary/50 shadow-xl hover:border-primary transition-colors"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance">
            Onkar Dongare
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            Junior AI/ML Engineer
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Skilled in Python, PyTorch, Scikit-learn, FastAPI, and Generative AI workflows with LangChain & LangGraph. Experienced in building API-driven web and mobile systems with practical machine learning and recommendation logic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a 
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition font-medium shadow-md shadow-primary/20"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/80 bg-neutral-900/60 hover:bg-neutral-800 text-foreground transition font-medium"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons - Bright, crisp, high contrast, above any gradient */}
        <div className="flex justify-center items-center gap-4 pt-4 relative z-20">
          <a 
            href="https://github.com/onkardongare" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-xl border border-white/15 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-md"
            aria-label="GitHub"
          >
            <Github size={22} className="stroke-[2.2]" />
          </a>
          <a 
            href="https://linkedin.com/in/onkardongare" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-xl border border-white/15 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-md"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} className="stroke-[2.2]" />
          </a>
          <a 
            href="mailto:dongareonkar2@gmail.com" 
            className="flex items-center justify-center p-3 rounded-xl border border-white/15 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-md"
            aria-label="Email"
          >
            <Mail size={22} className="stroke-[2.2]" />
          </a>
          <a 
            href="https://x.com/dongareonkar_2" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-xl border border-white/15 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-md"
            aria-label="Twitter"
          >
            <Twitter size={22} className="stroke-[2.2]" />
          </a>
        </div>
      </div>

      {/* Subtle bottom transition fade placed only at the bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#06080d] to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
    </section>
  )
}
