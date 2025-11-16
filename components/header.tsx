'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">
          Onkar Dongare
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border flex flex-col gap-4 p-4 md:hidden">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}
