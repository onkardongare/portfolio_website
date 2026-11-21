import { ExternalLink, GithubIcon } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  links: {
    github?: string
    live?: string
    liveLabel?: string
  }
}

const projects: Project[] = [
  {
    title: 'Smart Climate Decision – AI Decision Intelligence Platform',
    description:
      'Built an AI-powered decision intelligence platform for multi-hazard urban climate adaptation that unifies environmental data streams into a continuous decision loop, enabling municipal planners to optimize resilience strategies across flood protection, groundwater recharge, and urban heat mitigation. Implemented Nugen AI reasoning, Pareto-frontier optimization, and PostGIS spatial integration; demonstrated 30% budget savings while improving multi-objective resilience outcomes in a Pune/PCMC case study.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'Nugen AI', 'PostGIS', 'Pareto Optimization', 'PostgreSQL'],
    links: {
      github: 'https://github.com/onkardongare/Smart_Climate_Engine',
    },
  },
  {
    title: 'My Cow – Livestock Management Mobile App',
    description:
      'Developed a mobile app for dairy farmers to maintain livestock records and monitor cow health and productivity, with local storage and multilingual support. Reached 600+ downloads; project reports a 40% reduction in manual errors across herd tracking operations.',
    tags: ['React Native', 'Expo', 'Redux', 'SQLite', 'i18next'],
    links: {
      github: 'https://github.com/onkardongare/my_cow',
      live: 'https://play.google.com/store/apps/details?id=com.onkar2.mycow',
      liveLabel: 'Google Play',
    },
  },
  {
    title: 'Mahira Studio – Fashion Design Mobile Application',
    description:
      'Built a full-stack mobile app with a React Native/Expo frontend and a Fastify/TypeScript/MongoDB backend; implemented JWT and Google OAuth authentication and RESTful APIs. Used Redux for centralized state management and Realm as the local database; configured Docker deployment and delivered cross-platform iOS/Android support with offline capability.',
    tags: ['React Native', 'Expo', 'Fastify', 'TypeScript', 'MongoDB', 'Realm', 'Docker', 'OAuth / JWT'],
    links: {
      github: 'https://github.com/onkardongare',
      live: 'https://play.google.com/store/apps/details?id=com.anonymous.myfashionapp',
      liveLabel: 'Google Play',
    },
  },
  {
    title: 'Viksit Bharat Youth Impact Platform',
    description:
      'A digital initiative designed to empower youth participation in India’s development agenda. Enables young citizens to track national development goals, participate in local problem-solving, and collaborate with authorities. Features contribution tracking, AI-assisted idea evaluation, district-level progress dashboards, and a community-driven feedback system.',
    tags: ['Next.js', 'Node.js', 'Fastify', 'Vercel', 'MongoDB', 'Mongoose'],
    links: {
      github: 'https://github.com/onkardongare/great_india',
      live: 'https://great-india-w7wr.vercel.app/en',
      liveLabel: 'Live Demo',
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-8 sm:py-10 px-4 bg-background transition-colors">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Vertically stacked full-width project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border/80 rounded-xl p-6 sm:p-8 hover:border-primary transition-all space-y-5 bg-card dark:bg-muted/20 hover:shadow-md shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-all px-3.5 py-1.5 rounded-lg border border-border bg-muted/60 hover:bg-muted hover:border-primary shadow-sm"
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-3.5 py-1.5 rounded-lg font-medium shadow-sm shadow-primary/30"
                    >
                      <ExternalLink size={16} />
                      {project.links.liveLabel || 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-medium"
                  >
                    {tag}
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
