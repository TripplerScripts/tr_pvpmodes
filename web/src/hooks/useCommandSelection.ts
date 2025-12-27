import { suggestionsCount } from "../../../shared/constants/config"
import { input } from "../features/input"

export let currentItemSelected: HTMLElement | Element | null | undefined

export const useCommandSelection = (direction: string) => {
  if (input.value.length === 0) return
  if (direction === 'down') {
    if (currentItemSelected?.nextElementSibling?.innerHTML) {
      currentItemSelected = currentItemSelected?.nextElementSibling
      currentItemSelected?.classList.add('border')
      currentItemSelected?.classList.add('border-white')
      currentItemSelected?.previousElementSibling?.classList.remove('border')
      currentItemSelected?.previousElementSibling?.classList.remove('border-white')
    } else {
      if (!currentItemSelected) {
        currentItemSelected = document.getElementById(`chat-suggestions-items`)?.firstElementChild?.nextElementSibling?.nextElementSibling
        currentItemSelected?.classList.add('border')
        currentItemSelected?.classList.add('border-white')
      }
    }
  } else {
    if (direction === 'up') {
      if (!currentItemSelected) {
        for (let i = suggestionsCount; i >= 0; i--) {
          if (document.getElementById(`chat-suggestion-item-${i}`)?.innerHTML) {
            currentItemSelected = document.getElementById(`chat-suggestion-item-${i}`)
            break
          }
        }
        currentItemSelected?.classList.add('border')
        currentItemSelected?.classList.add('border-white')
        return
      }
      if (!currentItemSelected?.previousElementSibling?.innerHTML) return
      currentItemSelected = currentItemSelected?.previousElementSibling
      currentItemSelected?.classList.add('border')
      currentItemSelected?.classList.add('border-white')
      currentItemSelected?.nextElementSibling?.classList.remove('border')
      currentItemSelected?.nextElementSibling?.classList.remove('border-white')
    }
  }
}

export const useClearCommandSelection = () => {
  currentItemSelected?.classList.remove('border')
  currentItemSelected?.classList.remove('border-white')
  currentItemSelected = null
}