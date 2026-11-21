export function About() {
  return (
    <section id="about" className="relative z-10 py-8 sm:py-10 px-4 bg-[#06080d]">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a <strong className="text-foreground font-semibold">Junior AI/ML Engineer</strong> focused on developing, evaluating, and deploying practical machine learning solutions and intelligent applications.
          </p>
          <p>
            Skilled in Python, SQL, scikit-learn, PyTorch, NumPy, Pandas, and FastAPI, with working knowledge of LangChain and LangGraph for building autonomous LLM application workflows.
          </p>
          <p>
            I have hands-on experience developing API-driven web and mobile applications, including recommendation systems and decision intelligence platforms that turn complex data into actionable outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
