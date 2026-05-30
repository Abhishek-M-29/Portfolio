import useScrollReveal from '../hooks/useScrollReveal'
import './Achievements.css'

const highlights = [
  { event: 'Eureka 2025', venue: 'IIT Bombay - Ideathon', rank: '1st' },
  { event: 'SimbaGPT Hackathon', venue: 'RV University, Bangalore', rank: '1st' },
  { event: 'CUEST 2.0', venue: 'M S Ramaiah Institute of Technology', rank: '2nd' },
  { event: 'Srujana 2025', venue: 'New Horizon College of Engineering', rank: '2nd' },
]

const competitions = [
  { event: 'InQuery (SQL)', rank: '1st' },
  { event: 'Codenza', rank: '1st' },
  { event: 'Coding & Debugging', rank: '1st' },
  { event: 'IT Quiz', rank: '1st' },
  { event: 'IT Manager', rank: '2nd' },
  { event: 'Inceptra 2025 - BIT', rank: '3rd' },
  { event: 'CypherQuest 2k25', rank: '3rd' },
  { event: 'Code Relay', rank: '3rd' },
]

const leadership = [
  { role: 'Event Head', context: "Tech Habba '25, coordinated 150+ volunteers for 3,000+ participants" },
  { role: 'Founding Executive Lead', context: 'The Big O Tech Club' },
  { role: 'Tech Lead', context: "Acharya Habba '25, technical planning and execution" },
]

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <div className="container stagger" ref={ref}>
      <h2 className="section-title">Proof through competitions and leadership</h2>

      {/* Highlight cards - big wins */}
      <div className="ach-highlights-shell">
      <div className="ach-highlights">
        {highlights.map((h) => (
          <div key={h.event} className="ach-highlight-card">
            <span className={`ach-rank ach-rank-${h.rank.replace(/\s/g, '')}`}>{h.rank}</span>
            <div className="ach-highlight-info">
              <span className="ach-highlight-event">{h.event}</span>
              <span className="ach-highlight-venue">{h.venue}</span>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Compact competitions list */}
      <div className="ach-section">
        <h3 className="ach-section-title">Competitions</h3>
        <div className="ach-compact-shell">
        <div className="ach-compact-grid">
          {competitions.map((c) => (
            <div key={c.event} className="ach-compact-row">
              <span className="ach-compact-event">{c.event}</span>
              <span className={`ach-compact-rank ach-rank-${c.rank.replace(/\s/g, '')}`}>{c.rank}</span>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="ach-section">
        <h3 className="ach-section-title">Leadership</h3>
        <div className="ach-leadership-shell">
        <div className="ach-leadership">
          {leadership.map((l) => (
            <div key={l.role} className="ach-lead-row">
              <span className="ach-lead-role">{l.role}</span>
              <span className="ach-lead-context">{l.context}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}
