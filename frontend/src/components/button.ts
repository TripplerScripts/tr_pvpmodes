import { ButtonConfig } from '../types/index'
import { types } from '../styles/button'
import createElement from '../modules/createElement'

export default function Button(config: ButtonConfig) {
  const { parent, content, id, type, onClick, onHover } = config
  
  const parentElement = document.getElementById(parent)
  if (!parentElement) {
    throw new Error(`Parent element with id "${parent}" not found`)
  }

  const button = createElement({parent: parent, id: id})
  button.id = id
  button.innerHTML = content
  button.className = types[type].trim().replace(/\s+/g, ' ')

  if (onClick) {
    button.addEventListener('click', onClick)
  }

  if (onHover) {
    button.addEventListener('mouseenter', onHover)
  }

  parentElement.appendChild(button)
  
}