import { ExternalLink, GithubIcon } from 'lucide-react'

const projects = [
  {
    title: 'Cow Management System',
    description:
      'A mobile application to streamline livestock record management for dairy farmers. Features include add, update, and monitor cow health and productivity data stored locally using SQLite. Integrated Redux for centralized state management and i18next for multilingual support. Resulted in a 40% reduction in manual record errors and improved operational visibility across herds.',
    tags: ['React Native', 'Expo', 'Redux', 'SQLite', 'i18next'],
    links: {
      github: 'https://github.com/onkardongare/my_cow',
      live: 'https://expo.dev/artifacts/eas/q2JvuZ4wVgU3Ha8JX9qo6Y.apk',
    },
  },
  {
    title: 'Infrastructure Coordination & Mapping System',
    description:
      'A unified platform to streamline communication between citizens, contractors, and city authorities in infrastructure development. Features real-time map visualization using MapLibre, geospatial data storage, and a mobile interface for field updates. Improved transparency, reduced work duplication, and enhanced decision-making across development activities.',
    tags: ['Next.js', 'Fastify', 'MongoDB', 'MapLibre', 'React Native'],
    links: {
      github: 'https://github.com/onkardongare/underground_infra',
      live: 'https://github.com/onkardongare/underground_infra',
    },
  },
  {
    title: 'Viksit Bharat Youth Impact Platform',
    description:
      'A digital initiative designed to empower youth participation in India’s development agenda. The platform enables young citizens to track national development goals, participate in local problem-solving, and collaborate with authorities. Features include contribution tracking, AI-assisted idea evaluation, district-level progress dashboards, and a community-driven feedback system. Helps amplify youth voices, accelerates grassroots innovation, and aligns citizen efforts with Viksit Bharat 2047 vision.',
    tags: ['Next.js', 'Node.js', 'Fastify', 'Vercel', 'MongoDB', 'Mongoose'],
    links: {
      github: 'https://github.com/onkardongare/great_india',
      live: 'https://great-india-w7wr.vercel.app/en',
    },
  },
  {
    title: 'Smart Garden',
    description:
      'A smart garden management application to track, organize, and monitor plant growth efficiently. Built with a scalable Fastify backend for data synchronization and API communication. Integrated an AI model to provide intelligent plant care recommendations including watering schedules and disease detection. Offline-first React Native frontend with Redux and SQLite.',
    tags: ['React Native', 'Redux', 'Expo', 'SQLite', 'Fastify', 'AI Model'],
    links: {
      github: 'https://github.com/onkardongare/Smart-Garden',
      live: 'https://github.com/onkardongare/Smart-Garden',
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20 px-4 bg-[#06080d]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Vertically stacked full-width project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border/80 rounded-xl p-6 sm:p-8 hover:border-primary transition-all space-y-5 bg-muted/20 hover:bg-muted/40 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/90 hover:text-white transition-all px-3 py-1.5 rounded-lg border border-border/80 bg-neutral-900/80 hover:border-primary"
                  >
                    <GithubIcon size={16} />
                    Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-3.5 py-1.5 rounded-lg font-medium shadow-sm shadow-primary/30"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
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
