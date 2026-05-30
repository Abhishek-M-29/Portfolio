import useScrollReveal from '../hooks/useScrollReveal';

export default function TextReveal({ children, as: Component = 'div', className = '', delay = 0 }) {
  const ref = useScrollReveal();

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
