import { types } from '../styles/button'

export interface ButtonConfig {
  parent: string
  content: string
  id: string
  type: keyof typeof types
  onClick?: () => void
  onHover?: () => void
}