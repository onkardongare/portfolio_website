import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'Nexturgo Solutions',
      duration: '6 months',
      points: [
        'Developed web and mobile application features using React Native, Expo, and TypeScript.',
        'Implemented product-recommendation functionality using Python and SQLite, working with product data and recommendation algorithms.',
        'Collaborated through GitHub using issue tracking and pull requests; used Docker, Jest, and Postman for development, debugging, and testing.',
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'Python', 'SQLite', 'Docker', 'Jest', 'Postman', 'Git'],
    },
  ]

  return (
    <section id="experience" className="relative z-10 py-8 sm:py-10 px-4 bg-[#06080d]">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Professional Experience</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-border/80 rounded-xl p-6 sm:p-8 space-y-5 bg-muted/20 hover:border-primary/60 transition-all shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                    <Briefcase className="text-primary size-5 shrink-0" />
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-lg">
                    {exp.company}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 w-fit">
                  <Calendar size={13} className="text-primary" />
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-2.5 text-muted-foreground leading-relaxed text-base">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-primary select-none mt-1.5 text-xs">◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
