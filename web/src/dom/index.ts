import { modulesEnabled } from "../../../shared/constants"

let modules: any = {}

if (modulesEnabled.chat) {
  modules.nuiFocus = (await import("@trippler/tr_lib/web")).nuiFocus
  modules.input = (await import("../elements/chat/input")).input
  modules.hideChat = (await import("../modules/chat")).hideChat
  modules.acceptSuggetion = (await import("../modules/chat")).acceptSuggetion
  modules.useCommandSelection = (await import("../hooks/chat/useCommandSelection")).useCommandSelection
  modules.currentItemSelected = (await import("../hooks/chat")).currentItemSelected
  modules.closestRelative = (await import("../hooks/chat/useUpdateSuggetions")).closestRelative
}
if (modulesEnabled.spawn) {
  modules.escapeMenu = (await import("../components/spawn/escapeMenu")).default
}

let enteredSelections = false

document.addEventListener('keydown', async (event) => {
  if (modulesEnabled.chat) {

    if (document.activeElement !== modules.input) return
    switch (event.key) {
      case 'Tab':
        event.preventDefault()
        if (enteredSelections) {
          modules.acceptSuggetion(modules.currentItemSelected?.firstElementChild?.firstElementChild?.innerHTML?.slice(1))
        } else {
          modules.acceptSuggetion(modules.closestRelative)
        }
        break
      case 'ArrowUp':
        enteredSelections = true
        modules.useCommandSelection('up')
        break
      case 'ArrowDown':
        enteredSelections = true
        modules.useCommandSelection('down')
        break
      case 'Escape':
        enteredSelections = false
        modules.hideChat()
        break
      case 'F11':
        modules.nuiFocus(true, true)
        break
    }
  }
  if (modulesEnabled.spawn) {
    if (document.activeElement === modules.input) return
    switch (event.key) {
      case 'Escape':
        modules.escapeMenu()
        break
    }
  }
})