export function About() {
  return (
    <section id="about" className="relative z-10 py-20 px-4 bg-[#06080d]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I’m Omkar Dongare, a developer focused on building real-world, impactful technology.
            I enjoy creating practical systems that solve everyday problems and improve how people interact with their environment.
            My strengths span backend, frontend, mobile, and mapping technologies, with a focus on scalability and clean architecture.
            I’m driven by curiosity, problem-solving, and the desire to make technology genuinely useful.
            I believe the best solutions come from collaboration, transparency, and bold ideas.
            If you’re passionate about crafting meaningful, real-world products, I’d love to build with you.
          </p>
        </div>

        {/* Vertically stacked Tech Stack & Specializations */}
        <div className="space-y-8 pt-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'React Native', 'Expo', 'Next.js', 'JavaScript', 'Fastify', 'MongoDB', 'Python', 'AI/ML', 'LangChain', 'Scikit Learn'].map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {['Web Development', 'App Development', 'AI Integration', 'API Development', 'Deployment', 'Optimization'].map((skill) => (
                <span key={skill} className="px-3.5 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
