import { trace } from "@trippler/tr_lib/shared"
import { suggestions } from "."
import { Suggestion } from "../../../../shared/types"

export default (name: Suggestion['name']) => {
  const filteredName = name[0] !== `/` ? name : name.slice(1)
  for (const [key, value] of suggestions.entries()) {
    if (value.name === filteredName) {
      suggestions.splice(key, 1)
      return
    }
  }
  trace(`tried to remove suggestion '${name}' but it was not found`)
}