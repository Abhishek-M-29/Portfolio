let lenisInstance = null

export function setLenis(instance) {
  lenisInstance = instance
}

export function scrollTo(target, options = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return

  if (lenisInstance) {
    lenisInstance.scrollTo(el, options)
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
