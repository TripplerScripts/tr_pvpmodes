import { input } from "../../features/chat/input"
import { resultsFound } from "../../../../../tr_chat/web/src/hooks/useUpdateSuggetions"

export default (suggestion: string | undefined) => {
  if (!suggestion || resultsFound < 1) return
  input.value = `/${suggestion}`
}