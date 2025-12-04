export interface ButtonConfig {
  parent: string
  content?: string
  id?: string
  className?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  type?: 'primary' | 'secondary' | 'soft' | 'none'
  disableKey?: boolean
  onClick?: (disable: () => void) => void
  onHover?: () => void
}

export interface InputOptions {
  parent: string,
  className?: string,
  defaultValue?: string,
  placeholder?: string,
  type?: string,
  onJoin?: () => void,
  onChange?: () => void,
  onSubmit?: () => void,
}