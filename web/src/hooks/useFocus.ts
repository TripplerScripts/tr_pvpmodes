import { messageCount, setFocus } from '..'

export default () => {
  setFocus(true)
  const inputElement = document.querySelector('.input') as HTMLInputElement
  inputElement?.focus()
  
  const input = document.getElementById('input')?.classList
  const block = document.getElementById('block')?.classList
  const messages = document.getElementById('messages')?.classList
  const cooldown = document.getElementById('cooldown-bar')?.classList
  cooldown?.remove('opacity-0')
  input?.add('opacity-100')
  input?.remove('opacity-0')
  block?.add('blured-20')
  messages?.add('blured-20')
  ;(window as any).refreshBlurElements?.()
  
  for (let i = 1; i <= messageCount; i++) {
    const message = document.getElementById('message-' + i)?.classList
    message?.remove('duration-[5s]')
    message?.add('duration-[0s]')
    message?.add('opacity-100')
    message?.remove('opacity-0')
  }
}