import { hideChat } from "../../../../../../tr_chat/web/src"
import { grabCursor } from "../../../../../../tr_chat/web/src/api"
import { input } from "../../../features/chat/input"
import useAcceptSuggetion from "../../../hooks/chat/useAcceptSuggetion"
import { currentItemSelected, useCommandSelection } from "../../../hooks/chat/useCommandSelection"
import { closestRelative } from "../../../hooks/chat/useUpdateSuggetions"

let enteredSelections = false

document.addEventListener('keydown', (event) => {
  if (!input.focus) return
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
    hideChat()
  }
  if (event.key === 'Escape') {
    enteredSelections = false
    hideChat()
  }
  if (event.key === 'F11') {
    grabCursor()
  }
})

export const preventPlaceholderDuplication = (index: number) => {
  const element = document.getElementById(`chat-suggestion-item-${index}`)
  if (element) {
    element.innerHTML = ''
  }
}