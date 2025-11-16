import { ExternalLink, GithubIcon } from 'lucide-react'

const projects = [
  {
    title: 'Cow Management System',
    description: 'A mobile application to streamline livestock record management for dairy farmers. Features include add, update, and monitor cow health and productivity data stored locally using SQLite. Integrated Redux for centralized state management and i18next for multilingual support. Resulted in a 40% reduction in manual record errors and improved operational visibility across herds.',
    tags: ['React Native', 'Expo', 'Redux', 'SQLite', 'i18next'],
    links: {
      github: 'https://github.com/onkardongare/my_cow',
      live: 'https://expo.dev/artifacts/eas/q2JvuZ4wVgU3Ha8JX9qo6Y.apk'
    }
  },
  {
    title: 'Infrastructure Coordination & Mapping System',
    description: 'A unified platform to streamline communication between citizens, contractors, and city authorities in infrastructure development. Features real-time map visualization using MapLibre, geospatial data storage, and a mobile interface for field updates. Improved transparency, reduced work duplication, and enhanced decision-making across development activities.',
    tags: ['Next.js', 'Fastify', 'MongoDB', 'MapLibre', 'React Native'],
    links: {
      github: 'https://github.com/onkardongare/underground_infra',
      live: 'https://github.com/onkardongare/underground_infra'
    }
  },
  {
    title: 'Viksit Bharat Youth Impact Platform',
    description:
      'A digital initiative designed to empower youth participation in India’s development agenda. The platform enables young citizens to track national development goals, participate in local problem-solving, and collaborate with authorities. Features include contribution tracking, AI-assisted idea evaluation, district-level progress dashboards, and a community-driven feedback system. Helps amplify youth voices, accelerates grassroots innovation, and aligns citizen efforts with Viksit Bharat 2047 vision.',
    tags: ['Next.js', 'Node.js', 'Fastify', 'Vercel', 'Fastify', 'mongodb', "Mongoose"],
    links: {
      github: 'https://github.com/onkardongare/great_india',
      live: 'https://great-india-w7wr-jb8dih6nq-onkardongares-projects.vercel.app/'
    }
  },
  {
    title: 'Smart Garden',
    description: 'A smart garden management application to track, organize, and monitor plant growth efficiently. Built with a scalable Fastify backend for data synchronization and API communication. Integrated an AI model to provide intelligent plant care recommendations including watering schedules and disease detection. Offline-first React Native frontend with Redux and SQLite.',
    tags: ['React Native', 'Redux', 'Expo', 'SQLite', 'Fastify', 'AI Model'],
    links: {
      github: 'https://github.com/onkardongare/Smart-Garden',
      live: 'https://github.com/onkardongare/Smart-Garden'
    }
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border border-border rounded-lg p-6 hover:border-primary transition space-y-4 bg-muted/20 hover:bg-muted/40"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href={project.links.github}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <GithubIcon size={16} />
                  Code
                </a>
                <a 
                  href={project.links.live}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
