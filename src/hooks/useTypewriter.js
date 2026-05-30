import { useEffect, useMemo, useState } from 'react'

export default function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, delay = 1800) {
  const stableWords = useMemo(() => words, [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!stableWords.length) return undefined

    const currentWord = stableWords[wordIndex % stableWords.length]
    const isWordComplete = !isDeleting && displayedText === currentWord
    const isWordCleared = isDeleting && displayedText === ''

    const timeout = window.setTimeout(
      () => {
        if (isWordComplete) {
          setIsDeleting(true)
          return
        }

        if (isWordCleared) {
          setIsDeleting(false)
          setWordIndex((index) => (index + 1) % stableWords.length)
          return
        }

        setDisplayedText((text) => (
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        ))
      },
      isWordComplete ? delay : isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => window.clearTimeout(timeout)
  }, [stableWords, wordIndex, displayedText, isDeleting, typeSpeed, deleteSpeed, delay])

  return displayedText
}
