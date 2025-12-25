import { createElement, Input } from '@lenixdev/ui_components'
import useUpdateSuggetions from '../../hooks/useUpdateSuggetions'
import { suggestionsCount } from '../../../../shared/constants/config'
import useChangeBorderColor from '../../hooks/useChangeBorderColor'
import { getArrayfiedPassedCharacters } from '../../utils'

createElement({
  parent: `chat-container`,
  id: `chat-input`,
  className: `w-full h-[40%] bg-stone-600 flex flex-col gap-1`
})

export const input = Input({
  parent: `chat-input`,
  placeholder: `use / to start a command`,
  className: `w-full bg-stone-700 p-2 outline-none text-white transition-all`,
  onChange: () => {
    useUpdateSuggetions(input.value)
    useChangeBorderColor(input.value)
  },
  onSubmit: () => {
    getArrayfiedPassedCharacters(input.value)
  }
})

createElement({
  parent: `chat-input`,
  id: `chat-suggestions-items`,
  className: `w-full h-full bg-inherit flex flex-col justify-between`,
})

setTimeout(() => {
  [...Array(suggestionsCount)].forEach((_, index) => {
    createElement({
      parent: `chat-suggestions-items`,
      id: `chat-suggestion-item-${index}`,
      className: `w-full h-[25%] bg-inherit text-stone-300 flex gap-1`,
    })
  })
})