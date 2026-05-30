import { useMemo, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    title: 'KJU',
    desc: 'Clinical decision-support prototype that combines Neo4j knowledge graphs, Gemini, FastAPI, and React to ground answers in traceable context instead of plain model output.',
    tags: ['FastAPI', 'Neo4j', 'React', 'Docker'],
    type: 'AI Systems',
    detail: 'KG-RAG',
    url: 'https://github.com/Abhishek-M-29/KJU',
    featured: true,
  },
  {
    title: 'MediMax',
    desc: 'Healthcare analytics system using LangGraph to coordinate specialized ML models for admission risk, lab interpretation, and workflow support behind a FastAPI service.',
    tags: ['LangGraph', 'FastAPI', 'Docker', 'ML Models'],
    type: 'AI Systems',
    detail: 'Healthcare ML',
    url: 'https://github.com/IAteNoodles/MediMax',
  },
  {
    title: 'RAG-implementation',
    desc: 'End-to-end RAG reference build with LangChain retrieval over FAISS, Gemini answer generation, and a Streamlit interface for testing grounded Q&A flows.',
    tags: ['Streamlit', 'FAISS', 'Gemini', 'LangChain'],
    type: 'RAG',
    detail: 'Reference build',
    url: 'https://github.com/Abhishek-M-29/RAG-implementation',
  },
  {
    title: 'Market-Researcher',
    desc: 'Multi-agent research workflow that pairs Perplexity and Gemini with verification steps to gather, compare, and summarize market intelligence with less manual sorting.',
    tags: ['LangGraph', 'Perplexity', 'Gemini', 'Streamlit'],
    type: 'Agents',
    detail: 'Research workflow',
    url: 'https://github.com/Abhishek-M-29/Market-Researcher',
  },
]

const filters = ['All', 'AI Systems', 'RAG', 'Agents']

export default function Projects() {
  const ref = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.type === activeFilter)
  }, [activeFilter])

  return (
    <div className="container stagger" ref={ref}>
      <div className="projects-heading">
        <div>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected work</h2>
        </div>
        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`project-filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {visibleProjects.map((p) => (
          <div key={p.title} className={`project-card ${p.featured ? 'project-featured' : ''}`}>
            <div className="project-card-inner">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-meta-row">
                <span className="project-featured-badge">{p.featured ? 'Featured' : p.type}</span>
                <span className="project-detail">{p.detail}</span>
              </div>
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <svg className="project-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
