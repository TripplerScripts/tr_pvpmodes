import createElement from '../functions/createElement'
import { buttonStyles } from '../styles/button'

export default function Button({
  content,
  styleName,
  parent,
  id,
  onClick,
  onHover
}: {
  parent: string
  content?: string
  styleName?: keyof typeof buttonStyles
  id?: string
  onClick?: (button: HTMLDivElement, clickCount: number) => void
  onHover?: (button: HTMLDivElement) => void
}) {
  const button = createElement({parent, id})
  button.className = buttonStyles[styleName]
  button.innerHTML = content
  
  let clickCount = 0
  let isHovering = false
  let currentStyle = styleName
  let preHoverContent = content
  let preHoverStyle = styleName

  const setContent = (newContent: string) => {
    button.innerHTML = newContent
    if (!isHovering) {
      preHoverContent = newContent
    }
  }

  const setStyle = (name: keyof typeof buttonStyles) => {
    currentStyle = name
    button.className = buttonStyles[name]
    if (!isHovering) {
      preHoverStyle = name
    }
  }
  
  (button as any).setContent = setContent;
  (button as any).setStyle = setStyle
  
  if (onClick) {
    button.addEventListener('click', () => {
      clickCount++
      onClick(button, clickCount)
    })
  }
  
  if (onHover) {
    button.addEventListener('mouseenter', () => {
      isHovering = true
      preHoverContent = button.innerHTML
      preHoverStyle = currentStyle
      onHover(button)
    })

    button.addEventListener('mouseleave', () => {
      isHovering = false
      button.innerHTML = preHoverContent
      button.className = buttonStyles[preHoverStyle]
      currentStyle = preHoverStyle
    })
  }
  
  return button
}