import { useDiv } from '@trippler/tr_kit/web'
import('./messages')
import('./input')

document.body.id = `body`
useDiv({
  parent: `body`,
  id: `root`,
  className: `w-full h-[100vh] hidden`
})

useDiv({
  parent: `root`,
  id: `chat-container`,
  className: `w-[33%] h-[66%] bg-stone-900 flex flex-col gap-4`
})