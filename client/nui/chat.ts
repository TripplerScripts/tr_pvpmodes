onNuiCallback('grabCursor', (_data, callback) => {
  SetNuiFocus(true, true)
  callback(true)
})

onNuiCallback<{ command: string[] }>('onCommand', (data, callback) => {
  ExecuteCommand(data.command.join(' '))
  callback(true)
})

onNuiCallback<null>('loseKeyboard', (_data, callback) => {
  SetNuiFocus(false, false)
  callback(true)
})

onNuiCallback<null>('loaded', (_data, callback) => {
  DOMLoaded = true
  addSuggestions(earlySuggestionsInsertion)
  callback(true)
})