import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-8">
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
          <a href="https://github.com/onkardongare" className="text-muted-foreground hover:text-foreground transition p-2">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/onkardongare" className="text-muted-foreground hover:text-foreground transition p-2">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:dongareonkar2@gmail.com" className="text-muted-foreground hover:text-foreground transition p-2">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://x.com/dongareonkar_2" className="text-muted-foreground hover:text-foreground transition p-2">
            <Twitter size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Onkar Dongare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
