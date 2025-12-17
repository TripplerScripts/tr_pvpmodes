import { createElement, Input, Button } from '@lenixdev/ui_components'
import { messagesCooldown } from '../../../../shared/constants/config'
import useCharacterLeft from '../../hooks/useCharactersLeft'
import createNewMessage from '../../components/createNewMessage'

document.body.id = 'body'
document.documentElement.className = '[scrollbar-width:none]'

createElement({
  parent: 'body',
  id: 'root',
  className: 'select-none w-full h-screen'
})

createElement({
  parent: 'root',
  id: 'container',
  className: 'w-full h-[80vh] flex items-end justify-start px-2'
})

createElement({
  parent: 'container',
  id: 'block',
  className: "w-[30%] h-[50%] flex flex-col p-1 gap-1 rounded-md border-stone-800/50"
})

createElement({
  parent: 'block',
  id: 'messages',
  className: "w-full flex-1 flex flex-col px-1 overflow-y-auto [scrollbar-width:none]",
})

createElement({
  parent: 'messages',
  id: 'spacer',
  className: 'flex-1'
})

createElement({
  parent: 'block',
  id: 'input',
  className: 'w-full h-fit bg-stone-600 flex items-center gap-1 px-1 opacity-0 rounded-md',
})

export const input = Input({
  parent: 'input',
  className: 'input flex-1 bg-transparent text-white text-lg outline-none px-1',
  placeholder: 'Say to all',
  onSubmit: () => createNewMessage(input.value),
  onChange: () => useCharacterLeft(input.value.length),
})

Button({
  parent: 'input',
  type: 'secondary',
  size: 'lg',
  content: 'Send',
  onClick: () => createNewMessage(input.value),
  disableKey: true
})

createElement({
  parent: 'block',
  id: 'cooldown-bar',
  className: `h-[1%] bg-blue-500 transition-[width] duration-[${messagesCooldown}s] ease-linear opacity-0`,
})

createElement({
  parent: 'block',
  className: 'w-full h-[10%] text-lg text-stone-200 px-1 hidden',
  id: 'character-left',
})