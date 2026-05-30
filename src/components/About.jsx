import useScrollReveal from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <div className="container" ref={ref}>
      <div className="about stagger">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2 className="section-title">About me</h2>
        </div>

        <div className="about-body">
          <div className="about-column">
            <h3 className="about-column-title">My Journey</h3>
            <div className="about-timeline">
              <div className="timeline-row">
                <span className="timeline-year">2022</span>
                <p className="timeline-desc">Started with Python and discovered the joy of building things from scratch.</p>
              </div>
              <div className="timeline-row">
                <span className="timeline-year">2023</span>
                <p className="timeline-desc">Built strong foundations through DSA, DBMS, and problem solving.</p>
              </div>
              <div className="timeline-row">
                <span className="timeline-year">2024</span>
                <p className="timeline-desc">Found my tribe through communities, competitions, and cybersecurity challenges.</p>
              </div>
              <div className="timeline-row">
                <span className="timeline-year">2025</span>
                <p className="timeline-desc">Turned curiosity into results with hackathon wins and AI exploration.</p>
              </div>
              <div className="timeline-row">
                <span className="timeline-year">2026</span>
                <p className="timeline-desc">Building research-driven AI systems that bridge ideas and real-world impact.</p>
              </div>
            </div>
          </div>

          <div className="about-column">
            <h3 className="about-column-title">What I'm building today</h3>
            <p>
              I build AI systems that go beyond simple model integration. My work focuses on GraphRAG, knowledge graphs, retrieval pipelines, agent orchestration, and backend infrastructure that makes AI applications reliable, explainable, and scalable.
            </p>
            <p>
              From hackathons to research projects, I enjoy solving problems where architecture matters more than prompts and systems matter more than demos.
            </p>
            <p>
              Currently exploring neuromorphic computing, intelligent agents, and the next generation of AI systems.
            </p>
          </div>
        </div>

        <p className="about-mantra">
          Always learning. Always shipping. Always competing.
        </p>

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
