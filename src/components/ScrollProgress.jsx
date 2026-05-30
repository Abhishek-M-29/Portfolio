import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress * 100}%`,
        background: 'var(--accent)',
        zIndex: 9998,
        transformOrigin: 'left',
        boxShadow: '0 0 8px rgba(var(--accent-rgb), 0.4)',
      }}
    />
  )
}
