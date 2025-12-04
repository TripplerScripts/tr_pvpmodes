import { ButtonConfig } from '../types/index'
import createElement from './createElement'

const getSize = (size: string): string => {
  const sizes = {
    'xs': 'text-xs py-1 px-4',
    'sm': 'text-sm py-1 px-4',
    'base': 'text-base py-1 px-4',
    'lg': 'text-lg py-1 px-5',
    'xl': 'text-xl py-1 px-6',
    '2xl': 'text-2xl py-2 px-6',
    '3xl': 'text-3xl py-2 px-8',
    '4xl': 'text-4xl py-3 px-10',
    '5xl': 'text-5xl py-3 px-12',
    '6xl': 'text-6xl py-4 px-14',
    '7xl': 'text-7xl py-5 px-16',
    '8xl': 'text-8xl py-6 px-20',
    '9xl': 'text-9xl py-6 px-20'
  }
  return sizes[size]
}

export function getType(type: string, size: string): string {
  switch(type) {
    case 'primary':
      return getSize(size) + ' w-fit h-fit font-semibold text-white rounded bg-blue-700 cursor-default transition-all hover:bg-blue-600 whitespace-nowrap'
      case 'secondary':
      return getSize(size) + ' w-fit h-fit font-semibold text-white rounded bg-neutral-700 border border-stone-600 cursor-default transition-all hover:bg-stone-600/90 whitespace-nowrap'    
    case 'soft':
      return getSize(size) + ' w-fit h-fit font-semibold text-blue-500 rounded bg-blue-950/70 cursor-default transition-all hover:bg-blue-900/50 whitespace-nowrap'
    case 'none':
    return ''
  }
}

export default function Button(config: ButtonConfig) {
  const { parent, content, id, className, type, size, disableKey, onClick, onHover } = config

  const parentElement = document.getElementById(parent) || document.querySelector(`.${parent}`)
  if (!parentElement) {
    throw new Error(`Parent element "${parent}" not found`)
  }

  const button = createElement({parent: parent, id: id, className: className, content: content})
  button.className = getType(type, size) != undefined ? getType(type, size).trim().replace(/\s+/g, ' ') : className

  let isDisabled = false

  if (onClick) {
    button.addEventListener('click', () => {
      if (isDisabled) return
      onClick(() => isDisabled = true)
    })
    
    parentElement.addEventListener('keydown', (e) => {
      if (!disableKey && !isDisabled && e.key === 'Enter') {
        onClick(() => isDisabled = true)
      }
    })
  }

  if (onHover) {
    button.addEventListener('mouseenter', onHover)
  }

  parentElement.appendChild(button)
  return button
}