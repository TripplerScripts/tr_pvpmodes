import { input } from "../elements/chat/input"
import { useCommandSelection } from "../hooks/chat/useCommandSelection"
import { currentItemSelected } from "../hooks/chat"
import { closestRelative } from "../hooks/chat/useUpdateSuggetions"
import { acceptSuggetion, hideChat } from "../modules/chat"
import { nuiFocus } from "@trippler/tr_lib/web"

let enteredSelections = false

document.addEventListener('keydown', (event) => {
  if (document.activeElement !== input) return
  if (event.key === 'Tab') {
    event.preventDefault()
    if (enteredSelections) {
      acceptSuggetion(currentItemSelected?.firstElementChild?.firstElementChild?.innerHTML?.slice(1))
    } else {
      acceptSuggetion(closestRelative)
    }
  }
  if (event.key === 'ArrowUp') {
    enteredSelections = true
    useCommandSelection('up')
  }
  if (event.key === 'ArrowDown') {
    enteredSelections = true
    useCommandSelection('down')
  }
  if (event.key === 'Escape') {
    enteredSelections = false
    hideChat()
  }
  if (event.key === 'Escape') {
    enteredSelections = false
    hideChat()
  }
  if (event.key === 'F11') {
    nuiFocus(true, true)
  }
})

export const preventPlaceholderDuplication = (index: number) => {
  const element = document.getElementById(`chat-suggestion-item-${index}`)
  if (element) {
    element.innerHTML = ''
  }
}