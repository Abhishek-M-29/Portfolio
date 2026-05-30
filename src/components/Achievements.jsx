import useScrollReveal from '../hooks/useScrollReveal'
import './Achievements.css'

const hackathons = [
  { event: 'SimbaGPT Hackathon (National Level)', rank: '1st' },
  { event: 'CUEST 2.0 (National Level)', rank: '2nd' },
  { event: 'Srujana 2025 (National Level)', rank: '2nd' },
  { event: 'CypherQuest 2k25', rank: '3rd' },
]

const ideathons = [
  { event: 'Eureka 2025 (IIT Bombay)', rank: '1st' },
  { event: 'Inceptra 2025 (BIT)', rank: '3rd' },
]

const competitive = [
  { event: 'Capture The Flag (CTF) - DSU', rank: '1st' },
  { event: 'InQuery (SQL) - KJU', rank: '1st' },
  { event: 'Codenza - Srishti 2025', rank: '1st' },
  { event: 'Coding & Debugging - SFGC', rank: '1st' },
  { event: 'IT Quiz - SFGC', rank: '1st' },
  { event: 'IT Manager - KJU', rank: '2nd' },
  { event: 'Code Relay (CP) - KJU', rank: '3rd' },
]

const leadership = [
  { role: 'Event Head', context: "Tech Habba '25 (Led 150+ volunteers; 3000+ participants)" },
  { role: 'Founding Member & Executive Lead', context: 'The Big O Tech Club' },
]

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <div className="container stagger" ref={ref}>
      <div className="section-heading">
        <p className="section-label">Awards</p>
        <h2 className="section-title">Podiums, leaderboards & leadership</h2>
      </div>

      {/* Hackathons */}
      <div className="ach-section">
        <h3 className="ach-section-title">Hackathons</h3>
        <div className="ach-highlights-shell">
        <div className="ach-highlights">
          {hackathons.map((h) => (
            <div key={h.event} className="ach-highlight-card">
              <span className={`ach-rank ach-rank-${h.rank.replace(/\s/g, '')}`}>{h.rank}</span>
              <div className="ach-highlight-info">
                <span className="ach-highlight-event">{h.event.split(' (')[0]}</span>
                {h.event.includes('(') && <span className="ach-highlight-venue">{h.event.split('(')[1].replace(')', '')}</span>}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Ideathons */}
      <div className="ach-section">
        <h3 className="ach-section-title">Ideathons</h3>
        <div className="ach-highlights-shell">
        <div className="ach-highlights" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {ideathons.map((h) => (
            <div key={h.event} className="ach-highlight-card">
              <span className={`ach-rank ach-rank-${h.rank.replace(/\s/g, '')}`}>{h.rank}</span>
              <div className="ach-highlight-info">
                <span className="ach-highlight-event">{h.event.split(' (')[0]}</span>
                {h.event.includes('(') && <span className="ach-highlight-venue">{h.event.split('(')[1].replace(')', '')}</span>}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Competitive Achievements */}
      <div className="ach-section">
        <h3 className="ach-section-title">Competitive Achievements</h3>
        <div className="ach-compact-shell">
        <div className="ach-compact-grid">
          {competitive.map((c) => (
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
