import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-border py-8 sm:py-10 px-4 bg-[#06080d]">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:dongareonkar2@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
          >
            <Mail size={20} />
            Send an Email
          </a>
          <a 
            href="https://linkedin.com/in/onkardongare"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-muted transition font-medium rounded-lg"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="flex gap-4 py-4">
          <a
            href="https://github.com/onkardongare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-sm"
            aria-label="GitHub"
          >
            <Github size={20} className="stroke-[2.2]" />
          </a>
          <a
            href="https://linkedin.com/in/onkardongare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="stroke-[2.2]" />
          </a>
          <a
            href="mailto:dongareonkar2@gmail.com"
            className="flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-sm"
            aria-label="Email"
          >
            <Mail size={20} className="stroke-[2.2]" />
          </a>
          <a
            href="https://x.com/dongareonkar_2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-neutral-900/80 text-white hover:text-primary hover:border-primary hover:scale-110 transition-all shadow-sm"
            aria-label="Twitter"
          >
            <Twitter size={20} className="stroke-[2.2]" />
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Onkar Dongare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
