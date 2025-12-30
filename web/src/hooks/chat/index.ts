import { Suggestion } from "../../../../shared/types";

export let currentItemSelected: HTMLElement | Element | null | undefined
export const suggestions: Suggestion[] = []

export const setCurrentItemSelected = (element: typeof currentItemSelected) => currentItemSelected = element