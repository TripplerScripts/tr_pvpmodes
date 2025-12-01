import { types } from '../components/button'

export interface ButtonConfig {
  parent: string
  content?: string
  id?: string
  className?: string
  type?: keyof typeof types
  onClick?: () => void
  onHover?: () => void
}