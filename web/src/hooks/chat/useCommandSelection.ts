import { currentItemSelected, setCurrentItemSelected } from "."
import { input } from "../../elements/chat/input"

const isValidItem = (el: Element | null | undefined) => {
  if (!el) return false
  const html = el.innerHTML?.trim()
  return html && html !== `<i class="fas fa-trash"></i>`
}

const getNextValid = (el: Element | null | undefined): Element | null | undefined => {
  let current = el
  while (current && !isValidItem(current)) {
    current = current.nextElementSibling
  }
  return current
}

const getPrevValid = (el: Element | null | undefined): Element | null | undefined => {
  let current = el
  while (current && !isValidItem(current)) {
    current = current.previousElementSibling
  }
  return current
}

export const useCommandSelection = (direction: string) => {
  if (input.value.length === 0) return

  if (direction === 'down') {
    currentItemSelected?.classList.remove('border', 'border-white')
    
    if (!currentItemSelected) {
      const container = document.getElementById('chat-suggestions-items')
      setCurrentItemSelected(getNextValid(container?.firstElementChild))
    } else {
      setCurrentItemSelected(getNextValid(currentItemSelected.nextElementSibling))
    }
    
    currentItemSelected?.classList.add('border', 'border-white')
  } else if (direction === 'up') {
  currentItemSelected?.classList.remove('border', 'border-white')
  
  if (!currentItemSelected) {
    const container = document.getElementById('chat-suggestions-items')
    setCurrentItemSelected(getPrevValid(container?.lastElementChild))
  } else {
    const prev = getPrevValid(currentItemSelected.previousElementSibling)
    if (!prev) {
      // Wrap to last valid element
      const container = document.getElementById('chat-suggestions-items')
      setCurrentItemSelected(getPrevValid(container?.lastElementChild))
    } else {
      setCurrentItemSelected(prev)
    }
  }
  
  currentItemSelected?.classList.add('border', 'border-white')
}
}

export const useClearCommandSelection = () => {
  currentItemSelected?.classList.remove('border', 'border-white')
  setCurrentItemSelected(null)
}