import { Suggestion } from '../shared/types'

export let DOMLoaded = false
export const earlySuggestionsInsertion: Suggestion[] = []

export const setDOMLoaded = (state: boolean) => DOMLoaded = state