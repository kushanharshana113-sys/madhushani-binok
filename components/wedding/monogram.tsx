export function Monogram({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const dims = {
    sm: 'h-10 w-10 text-xs',
    md: 'h-16 w-16 text-base',
    lg: 'h-20 w-20 text-lg',
  }[size]

  return (
    <div
      className={`flex items-center justify-center rounded-full border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep font-serif tracking-widest text-cream shadow-[0_4px_18px_rgba(0,0,0,0.35)] ${dims} ${className}`}
    >
      M&nbsp;&amp;&nbsp;B
    </div>
  )
}
