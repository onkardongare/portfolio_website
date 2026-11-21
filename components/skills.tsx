export function Skills() {
  // Only skills strictly present in the resume
  const technicalSkills = [
    'Python',
    'SQL',
    'Machine Learning Algorithms',
    'Scikit-learn',
    'PyTorch',
    'NumPy',
    'Pandas',
    'Pydantic',
    'LangChain',
    'LangGraph',
    'LangSmith',
    'FastAPI',
    'Flask',
    'REST API Development',
    'PostgreSQL',
    'Redis',
    'Realm',
    'Git',
    'GitHub',
    'Docker',
    'Postman',
    'React.js',
    'React Native',
    'Expo',
  ]

  // Only languages strictly present in the resume
  const languages = [
    'English (Working Proficiency)',
    'Hindi (Fluent)',
    'Marathi (Native)',
  ]

  // Only interests strictly present in the resume
  const interests = [
    'Outdoor Running',
    'Tree Planting',
    'Vegetable Cooking',
  ]

  return (
    <section id="skills" className="relative z-10 py-8 sm:py-10 px-4 bg-background transition-colors">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        {/* 1. TECHNICAL SKILLS SECTION (Unified in one section, clean badges, no icons) */}
        <div className="border border-border/80 rounded-xl p-5 sm:p-6 bg-card dark:bg-muted/20 space-y-3 shadow-sm transition-colors">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Technical Skills
            </h3>
            <p className="text-sm text-muted-foreground">
              Core competencies across machine learning, artificial intelligence, and full-stack development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-lg border border-primary/20 bg-primary/10 text-primary text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 2. LANGUAGES & INTERESTS SECTION (Same color as skills, clean badges, no extra stuff) */}
        <div className="border border-border/80 rounded-xl p-5 sm:p-6 bg-card dark:bg-muted/20 space-y-5 shadow-sm transition-colors">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Languages & Interests
            </h3>
            <p className="text-sm text-muted-foreground">
              Language proficiencies and personal activities.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            {/* Languages - EXACT same primary color as technical skills */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Languages
              </span>
              <div className="flex flex-wrap gap-2.5">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3.5 py-1.5 rounded-lg border border-primary/20 bg-primary/10 text-primary text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests - Same consistent primary styling */}
            <div className="space-y-2 pt-2 border-t border-border/40">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Interests
              </span>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-lg border border-primary/20 bg-primary/10 text-primary text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
