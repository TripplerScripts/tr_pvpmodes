export default function Button({
  children,
  onClick,
  className = '',
  background = 'bg-blue-500',
  hoverBackground = 'hover:bg-blue-700',
  onHover,
  onHoverEnd
}: {
  children: string
  onClick: (button: HTMLButtonElement, clickCount: number) => void
  className?: string
  background?: string
  hoverBackground?: string
  onHover?: (button: HTMLButtonElement) => void
  onHoverEnd?: (button: HTMLButtonElement) => void
}) {
  const button = document.createElement('button')
  button.className = `text-white text-xl font-bold py-2 px-4 rounded ${background} ${hoverBackground} cursor-pointer ${className}`
  button.textContent = children
  
  let clickCount = 0
  let isHovering = false
  let originalText = children
  
  const originalSetText = (text: string) => {
    originalText = text
    button.textContent = text
    if (isHovering && onHover) {
      onHover(button)
    }
  }
  
  ;(button as any).setText = originalSetText
  
  button.addEventListener('click', () => {
    clickCount++
    onClick(button, clickCount)
  })
  
  if (onHover) {
    button.addEventListener('mouseenter', () => {
      isHovering = true
      onHover(button)
    })
  }
  
  if (onHoverEnd) {
    button.addEventListener('mouseleave', () => {
      isHovering = false
      button.textContent = originalText
      onHoverEnd(button)
    })
  }
  
  return button
}