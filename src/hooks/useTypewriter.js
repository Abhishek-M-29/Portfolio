import { useState, useEffect, useRef } from 'react'

export default function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [text, setText] = useState('')
  const idxRef = useRef(0)
  const delRef = useRef(false)

  useEffect(() => {
    let timer

    const tick = () => {
      const phrase = phrases[idxRef.current]

      if (!delRef.current) {
        if (text.length < phrase.length) {
          timer = setTimeout(() => setText(phrase.substring(0, text.length + 1)), typingSpeed)
        } else {
          timer = setTimeout(() => {
            delRef.current = true
            tick()
          }, pauseDuration)
        }
      } else {
        if (text.length > 0) {
          timer = setTimeout(() => setText(phrase.substring(0, text.length - 1)), deletingSpeed)
        } else {
          delRef.current = false
          idxRef.current = (idxRef.current + 1) % phrases.length
          timer = setTimeout(tick, typingSpeed)
        }
      }
    }

    timer = setTimeout(tick, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return text
}
