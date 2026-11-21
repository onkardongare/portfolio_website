'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground hover:opacity-85 transition-opacity">
          Onkar Dongare
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition font-medium text-sm">About</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition font-medium text-sm">Skills</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition font-medium text-sm">Experience</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition font-medium text-sm">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition font-medium text-sm">Contact</a>
          <div className="pl-2 border-l border-border/80">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2 rounded-lg border border-border/80 text-foreground bg-muted/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border flex flex-col gap-4 p-5 md:hidden shadow-lg animate-in fade-in slide-in-from-top-2">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition font-medium">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition font-medium">Skills</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition font-medium">Experience</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition font-medium">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition font-medium">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}
