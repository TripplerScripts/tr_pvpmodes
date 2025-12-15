export interface AlertOptions {
  type: 'success' | 'error' | 'warn' | 'info'
  title: string
  message: string
  button?: string
  onClick?: () => void
}