import { hideChat } from "../.."
import { input } from "../../features/input"
import useAcceptSuggetion from "../../hooks/useAcceptSuggetion"
import { currentItemSelected, useClearCommandSelection, useCommandSelection } from "../../hooks/useCommandSelection"
import { closestRelative } from "../../hooks/useUpdateSuggetions"

document.addEventListener('keydown', (event) => {
  if (!input.focus) return
  if (event.key === 'Tab') {
    useAcceptSuggetion(closestRelative)
  }
  if (event.key === 'Enter') {
    useAcceptSuggetion(currentItemSelected?.firstElementChild?.firstElementChild?.innerHTML?.slice(1))
  }
  if (event.key === 'ArrowUp') {
    useCommandSelection('up')
  }
  if (event.key === 'ArrowDown') {
    useCommandSelection('down')
  }
  if (event.key === 'Escape') {
    useClearCommandSelection()
    hideChat()
  }
})

export const preventPlaceholderDuplication = (index: number) => {
  const element = document.getElementById(`chat-suggestion-item-${index}`)
  if (element) {
    element.innerHTML = ''
  }
}