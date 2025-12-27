import { Button, createElement, Input } from '@lenixdev/ui_components'
import useUpdateSuggetions from '../../hooks/useUpdateSuggetions'
import { suggestionsCount } from '../../../../shared/constants/config'
import { useChangeBorderColor } from '../../hooks/useChangeBorderColor'
import { passCommand } from '../../api'
import { getPassedArgumentsFirstString } from '../../utils'
import { clearStoredFrequentlyUsedCommands, getStoredFrequentlyUsedCommands, useStoreFrequentlyUsedCommands } from '../../hooks/useFrequentlyUsedCommands'

createElement({
  parent: `chat-container`,
  id: `chat-input`,
  className: `w-full h-[40%] bg-stone-600 flex flex-col gap-1`
})

export const input = Input({
  parent: `chat-input`,
  placeholder: `type / to start a command`,
  className: `input w-full bg-stone-700 p-2 outline-none text-white transition-all`,
  onChange: () => {
    useUpdateSuggetions(input.value)
    useChangeBorderColor(input.value)
  },
  onSubmit: () => {
    passCommand(input.value)
    useUpdateSuggetions(``)
    useStoreFrequentlyUsedCommands(getPassedArgumentsFirstString(input.value))
    input.value = ``
  },
})

createElement({
  parent: `chat-input`,
  id: `chat-suggestions-items`,
  className: `relative w-full h-full bg-inherit flex flex-col justify-between`,
})

Button({
  parent: `chat-suggestions-items`,
  content: '<i class="fas fa-times"></i>',
  className: `absolute top-0 right-0 z-10 w-8 h-8 bg-red-500`, // Fixed size, added z-index
  onClick: () => {
    clearStoredFrequentlyUsedCommands()
  }
})

setTimeout(() => {
  [...Array(suggestionsCount)].forEach((_, index) => {
    createElement({
      parent: `chat-suggestions-items`,
      id: `chat-suggestion-item-${index}`,
      className: `w-full h-fit bg-inherit text-stone-300 flex flex-col gap-1`,
    })
  })
})