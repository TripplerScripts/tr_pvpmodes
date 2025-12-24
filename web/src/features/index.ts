import { createElement } from '@lenixdev/ui_components'
import('./messages')
import('./input')

document.body.id = `body`
createElement({
  parent: `body`,
  id: `root`,
  className: `w-full h-[100vh]`
})

createElement({
  parent: `root`,
  id: `chat-container`,
  className: `w-[33%] h-[66%] bg-stone-900 flex flex-col gap-4`
})