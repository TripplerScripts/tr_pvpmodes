import { ButtonConfig } from '../types/index'
import createElement from './createElement'

export const types = {
  primary: `
    text-white
    text-sm
    font-semibold
    py-1
    px-4
    rounded
    bg-blue-700
    cursor-default
    transition-all
    w-fit
    h-fit
    hover:bg-blue-600
    whitespace-nowrap
  `,
  secondary: `
    text-white
    text-sm
    font-semibold
    py-1
    px-4
    rounded
    bg-neutral-700
    border
    border-stone-600
    cursor-default
    transition-all
    w-fit
    h-fit
    hover:bg-stone-600/90
    whitespace-nowrap
  `,
  soft: `
    text-blue-500
    text-sm
    font-semibold
    py-1
    px-4
    rounded
    bg-blue-950/70
    cursor-default
    transition-all
    w-fit
    h-fit
    hover:bg-blue-900/50
    whitespace-nowrap
  `,
  none: ''
}

export default function Button(config: ButtonConfig) {
  const { parent, content, id, className, type, onClick, onHover } = config

  const parentElement = document.getElementById(parent) || document.querySelector(`.${parent}`)
  if (!parentElement) {
    throw new Error(`Parent element "${parent}" not found`)
  }

  const button = createElement({parent: parent, id: id, className: className, content: content})
  button.className = types[type] != undefined ? types[type].trim().replace(/\s+/g, ' ') : className

  if (onClick) {
    button.addEventListener('click', onClick)
  }

  if (onHover) {
    button.addEventListener('mouseenter', onHover)
  }

  
  parentElement.appendChild(button)
  return button
}