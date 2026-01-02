import { suggestions } from "."
import { Suggestion } from "../../../../shared/types"

export default (
  name: Suggestion['name'],
  help: Suggestion['help'],
  params: Suggestion['params']  
) => {
  suggestions.push({ 
    name: name[0] !== `/` ? name : name.slice(1),
    help,
    params
  })
}