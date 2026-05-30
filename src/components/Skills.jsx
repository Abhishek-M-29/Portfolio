import useScrollReveal from '../hooks/useScrollReveal'
import './Skills.css'

const skillGroups = [
  {
    category: 'Languages', items: ['Python', 'C', 'C++', 'Java'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  {
    category: 'AI Systems', items: ['RAG', 'LLM Integration', 'Knowledge Graphs', 'Agent Workflows', 'Explainable AI'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5v1h3a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-3v1c1.2.7 2 2 2 3.5a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.5v-1H8a2 2 0 0 1-2-2V12.5a2 2 0 0 1 2-2h3v-1a4 4 0 0 1-2-3.5 4 4 0 0 1 4-4z"/></svg>
  },
  {
    category: 'Backend', items: ['FastAPI', 'Flask', 'REST APIs', 'Uvicorn'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>
  },
  {
    category: 'Databases', items: ['MongoDB', 'MySQL', 'MariaDB', 'Neo4j'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
  },
  {
    category: 'Cloud & DevOps', items: ['Azure', 'GCP', 'Docker', 'Git', 'Netlify'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>
  },
  {
    category: 'Frameworks & Tools', items: ['LangGraph', 'LangChain', 'Streamlit', 'Selenium', 'Jupyter'],
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <div className="container stagger" ref={ref}>
      <h2 className="section-title">Core toolkit</h2>

      {/* Skill cards - double-bezel shell */}
      <div className="skills-shell">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
