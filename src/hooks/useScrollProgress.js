import { useRef, useEffect, useState } from 'react'

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafId = useRef(null)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress(height > 0 ? total / height : 0)
      rafId.current = requestAnimationFrame(update)
    }
    rafId.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  return progress
}
