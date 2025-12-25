import { input } from "../features/input"
import { resultsFound } from "./useUpdateSuggetions"

export default (suggestion: string | undefined) => {
  if (!suggestion || resultsFound < 1) return
  input.value = `/${suggestion}`
}