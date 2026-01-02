import { input } from "../elements/chat/input"
import useAcceptSuggetion from "../hooks/chat/useAcceptSuggetion"
import { useCommandSelection } from "../hooks/chat/useCommandSelection"
import { currentItemSelected } from "../hooks/chat"
import { closestRelative } from "../hooks/chat/useUpdateSuggetions"
import useHideChat from "../hooks/chat/useHideChat"
import { nuiFocus } from "@trippler/tr_lib/web"

let enteredSelections = false

document.addEventListener('keydown', (event) => {
  if (document.activeElement !== input) return
  if (event.key === 'Tab') {
    event.preventDefault()
    if (enteredSelections) {
      useAcceptSuggetion(currentItemSelected?.firstElementChild?.firstElementChild?.innerHTML?.slice(1))
    } else {
      useAcceptSuggetion(closestRelative)
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
    useHideChat()
  }
  if (event.key === 'Escape') {
    enteredSelections = false
    useHideChat()
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