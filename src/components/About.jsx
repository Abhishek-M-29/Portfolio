import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <div className="container" ref={ref}>
      <div className="about stagger">
        <span className="eyebrow">About</span>
        <h2 className="section-title">AI, backend, and systems that hold up</h2>

        {/* Stats highlights */}
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-value">4</span>
            <span className="about-stat-label">Applied AI projects</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-value">3,000+</span>
            <span className="about-stat-label">Event attendees led</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-value">8+</span>
            <span className="about-stat-label">Competition wins</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-value">2</span>
            <span className="about-stat-label">Tech communities built</span>
          </div>
        </div>

        <div className="about-body">
          <div className="about-column">
            <p>
              I am a Computer Science student focused on applied AI engineering: RAG pipelines,
              multi-agent workflows, model-backed APIs, and the backend pieces that make those
              systems usable. I like work where the interesting part is not only the model, but
              the retrieval, orchestration, data flow, and product constraints around it.
            </p>
            <p>
              My base came from competitive programming and hackathons, where speed matters but
              correctness matters more. That has carried into how I build: start with a clear
              problem, ship a working system, then tighten the architecture until it is easier
              to explain, test, and extend.
            </p>
          </div>

          <div className="about-column">
            <p>
              Recently I have been working with retrieval-augmented generation, knowledge graphs,
              LangGraph-style orchestration, and explainable AI patterns. Projects like
              <strong>KJU</strong> combine Neo4j, RAG, FastAPI, and React to make LLM outputs easier
              to ground, inspect, and trust.
            </p>
            <p>
              I am looking for internships and collaborations where I can contribute across AI,
              backend engineering, and product-minded problem solving. Outside code, I have led
              large student tech events, coordinated 150+ volunteers, and helped build technical
              communities on campus.
            </p>
          </div>
        </div>

        <div className="about-details-shell">
        <div className="about-details">
          <div className="about-detail">
            <span className="about-detail-label">Education</span>
            <span className="about-detail-value">B.E. Computer Science, AIT Bangalore</span>
          </div>
          <div className="about-detail">
            <span className="about-detail-label">CGPA</span>
            <span className="about-detail-value">8.7 / 10</span>
          </div>
          <div className="about-detail">
            <span className="about-detail-label">Graduating</span>
            <span className="about-detail-value">2027</span>
          </div>
          <div className="about-detail">
            <span className="about-detail-label">Based in</span>
            <span className="about-detail-value">Bangalore, India</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
